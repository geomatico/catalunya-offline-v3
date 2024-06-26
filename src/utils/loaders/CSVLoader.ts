import {load} from '@loaders.gl/core';
import {CSVLoader as glCSVLoader} from '@loaders.gl/csv';
import {IGeodataLoader} from './types';

const asCoord = (str: string) => parseFloat(str.replace(',', '.'));

const CSVLoader: IGeodataLoader = {
  load: (url) => load(url, glCSVLoader).then(rows => {
    if (!rows?.length) {
      return Promise.reject('errors.CSVLoader.noData');
    }
    if (!rows[0].lat || !rows[0].lon) {
      return Promise.reject('errors.CSVLoader.missingColumns');
    }
    return {
      type: 'FeatureCollection',
      features: rows.map((row: Record<string, string>) => {
        const {lat, lon, ...properties} = row;
        return {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [asCoord(lon), asCoord(lat)]
          },
          properties
        };
      })
    };
  })
};

export default CSVLoader;
