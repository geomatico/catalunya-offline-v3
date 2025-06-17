import maplibregl from 'maplibre-gl';
import {getTile as getMbtile} from './mbtiles';
import mlcontour from 'maplibre-contour';
import {
  DemManager,
  GlobalContourTileOptions,
  IndividualContourTileOptions
} from 'maplibre-contour/dist/types';

const managers: Record<string, DemManager> = {};

const getManager = (base: string) => {
  if(!managers[base]) {
    const getTile = base.startsWith('mbtiles') ? async (url: string) => {
      const tileBuffer = await getMbtile(url);
      if (!tileBuffer) {
        throw new Error(`Error getting tile for ${url}`);
      }
      return {
        data: new Blob([tileBuffer])
      };
    } : undefined;

    managers[base] = new mlcontour.LocalDemManager({
      demUrlPattern: `${base}/{z}/{x}/{y}.png`, // This is the URL of the DEM tiles
      cacheSize: 100,
      encoding: 'mapbox',
      maxzoom: 14,
      timeoutMs: 10000,
      getTile
    });
  }
  return managers[base];
};

const globalContourTileOptions: GlobalContourTileOptions = {
  thresholds: {
    // zoom: [minor, major]
    12: [50, 250],
    13: [20, 100],
    14: [10, 50]
  },
  contourLayer: 'contour',
  elevationKey: 'height',
  levelKey: 'level', // 0 - minor, 1 - major
  buffer: 1,
  overzoom: 1
};

export function getOptionsForZoom(
  options: GlobalContourTileOptions,
  zoom: number,
): IndividualContourTileOptions {
  const { thresholds, ...rest } = options;

  let levels: number[] = [];
  let maxLessThanOrEqualTo: number = -Infinity;

  Object.entries(thresholds).forEach(([zString, value]) => {
    const z = Number(zString);
    if (z <= zoom && z > maxLessThanOrEqualTo) {
      maxLessThanOrEqualTo = z;
      levels = typeof value === 'number' ? [value] : value;
    }
  });

  return {
    levels,
    ...rest,
  };
}

const contourProtocol = (ml: typeof maplibregl) => {

  ml.addProtocol('contour', (params, callback) => {
    const url = params.url;
    const splitUrl = url.split('/');
    //const dbPath = dbPaths[splitUrl[2]];
    const z = +splitUrl[splitUrl.length - 3];
    const x = +splitUrl[splitUrl.length - 2];
    const y = +(splitUrl[splitUrl.length - 1].split('.')[0]);
    const base = splitUrl.slice(2, -3).join('/');

    const manager = getManager(base);
    manager.fetchContourTile(z, x, y, getOptionsForZoom(globalContourTileOptions, z), new AbortController()).then((tile) => {
      try {
        callback(null, tile.arrayBuffer);
      } catch {
        console.info('[contourProtocol] No data');
        //callback();
      }
    });

    return {
      cancel: () => undefined
    };
  });
};

export {
  contourProtocol
};
