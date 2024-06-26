import GeoJSON from 'geojson';

export type BaseMap = {
  id: string
  labels: {
    [index: string]: string;
    ca: string;
    en: string;
    es: string;
  },
  thumbnail: string,
  style: string,
  sprites?: string,
  maxZoom?: number,
  attribution?: string
}

export type BaseMaps = Array<BaseMap>

export type OfflineDatasource = {
  id: string,
  url: string,
  labels: {
    [index: string]: string;
    ca: string;
    en: string;
    es: string;
  }
}

export type OfflineDatasources = Array<OfflineDatasource>

export type Style = {
  id: string
  labels: {
    [index: string]: string;
    ca: string;
    en: string;
    es: string;
  },
  label: string,
  thumbnail: string,
  style: string,
  sprites?: string
  attribution?: string
}

export type Styles = Array<Style>

export type Manager = 'LAYERS' | 'BASEMAPS' | 'SCOPES' | undefined;

export interface CatOfflineError {
  code: string,
  params?: Record<string, string | number>
}

export type UUID = string;
export type HEXColor = `#${string}`;

export type Scope = {
  id: UUID,
  name: string,
  color: HEXColor,
  schema?: Schema
}

export interface ScopeFeature extends GeoJSON.Feature<GeoJSON.Geometry | null> {
  type: 'Feature',
  id: UUID,
  geometry: GeoJSON.Geometry | null,
  properties: {
    name: string,
    color?: HEXColor, // Optional, inherits Scope's color
    timestamp: EpochTimeStamp, // In milliseconds https://w3c.github.io/hr-time/#the-epochtimestamp-typedef
    description: string,
    images: Array<ImagePath>,
    isVisible: boolean
  },
  schemaValues?: Record<UUID, string>
}

export interface ScopePoint extends ScopeFeature {
  geometry: GeoJSON.Point // Point geometry is required (not nullable)
}

export interface ScopeTrack extends ScopeFeature {
  geometry: GeoJSON.LineString | null // Track geometry is nullable
}

export type ImagePath = string

export enum LANGUAGE {
  'ca',
  'en',
  'es'
}

export enum SCOPE_FEATURES_PANEL_TAB {
  POINTS,
  TRACKS
}

export type ContextMapsResult = {
  nom: string,
  coordenades: string,
  origen: string
}

export type SchemaFieldType = {
  id: UUID,
  name: string,
  appliesToPoints: boolean,
  appliesToTracks: boolean,
}

export type Schema = Array<SchemaFieldType>

export type UserLayer = {
  id: UUID,
  name: string,
  color: HEXColor,
  isVisible: boolean,
  data: GeoJSON.FeatureCollection
}
