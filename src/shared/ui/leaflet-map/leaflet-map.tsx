import { Classed, MapPoint } from '@shared/model';
import { JSX, PropsWithChildren } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { CARD_ZOOM, TILE_LAYER_SETTINGS } from '@shared/config/leaflet';
import { MarkersLayer } from './markers-layer';

type LeafletMapProps = Classed<PropsWithChildren<{
  center: MapPoint;
  points: MapPoint[];
  selectedPoint?: MapPoint;
  onPointClick?: (pointId: string) => void;
}>>;

export function LeafletMap({
  center,
  className,
  children,
  points,
  selectedPoint,
  onPointClick
}: LeafletMapProps): JSX.Element {

  return (
    <div className={className}>
      <div className='map'>
        <MapContainer
          center={center.position}
          scrollWheelZoom={false}
          zoom={CARD_ZOOM}
          className='map__container'
        >
          <TileLayer
            attribution={TILE_LAYER_SETTINGS.attribution}
            url={TILE_LAYER_SETTINGS.url}
          />
          <MarkersLayer markers={points} onMarkerClick={onPointClick} selectedMarker={selectedPoint} />
        </MapContainer>
      </div>
      { children }
    </div >
  );
}
