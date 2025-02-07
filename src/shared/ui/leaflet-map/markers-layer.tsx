import { ICON_OFFSET, IconPath } from '@shared/config/leaflet';
import { MapCoordinate, MapPoint } from '@shared/model';
import { icon, latLngBounds } from 'leaflet';
import { JSX, useEffect } from 'react';
import { FeatureGroup, Marker, useMap } from 'react-leaflet';

type MarkersLayerProps = {
  markers: MapPoint[];
  onMarkerClick?: (pointId: string) => void;
  selectedMarker?: MapPoint;
}

const isEqualsCoordinates = (firstCoordinate: MapCoordinate, secondCoordinate: MapCoordinate): boolean =>
  firstCoordinate[0] === secondCoordinate[0] && firstCoordinate[1] === secondCoordinate[1];

export function MarkersLayer({ markers, onMarkerClick, selectedMarker }: MarkersLayerProps): JSX.Element {
  const map = useMap();

  useEffect(
    () => {
      let componentIsRendered = false;

      if (!componentIsRendered) {
        const markerBounds = latLngBounds([]);

        if (markers.length > 1) {
          markers.forEach((current) => {
            markerBounds.extend(current.position);
          });

          map.fitBounds(markerBounds, {padding: [5, 5]});
        }
      }

      return () => {
        componentIsRendered = false;
      };
    },
    [map, markers]
  );

  return (
    <FeatureGroup>
      {markers.map((current) => (
        <Marker
          key={current.id}
          position={current.position}
          title={current.title}
          eventHandlers={onMarkerClick && {
            click() {
              onMarkerClick(current.id);
            }
          }}
          icon={icon({
            iconUrl: selectedMarker && isEqualsCoordinates(selectedMarker.position, current.position) ? IconPath.Active : IconPath.Default,
            iconAnchor: [ICON_OFFSET.lat, ICON_OFFSET.lng]
          })}
        />
      ))}
    </FeatureGroup>
  );
}
