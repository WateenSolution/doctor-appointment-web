// MapComponent.js
import React from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { CardCallout } from "../Cards/CalloutCard";

const containerStyle = {
  width: "100%",
  height: "500px",
  marginTop: 20,
};
const center = {
  lat: 31.5204,
  lng: 74.3587,
};

function MapComponentCon({
  map_data,

  selectedSlab,
}) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyADmYFvUDRaZ41fLRiCGhMPOcbNgNMHsHc",
  });
  const [activeMarker, setActiveMarker] = React.useState(null);
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(
    function callback(map) {
      if (map_data?.length > 0) {
        const bounds = new window.google.maps.LatLngBounds();
        map_data?.forEach((item) => {
          bounds.extend({ lat: item?.latitude, lng: item?.longitude });
        });

        map.fitBounds(bounds);
        setMap(map);
        // Wait for the map tiles to load and then adjust the bounds again
        window.google.maps.event.addListenerOnce(map, "tilesloaded", () => {
          map.fitBounds(bounds);
        });
      }
    },
    [map_data]
  );

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleMarkerMouseOver = (marker) => {
    setActiveMarker(marker);
  };

  const handleMarkerMouseOut = () => {
    setActiveMarker(null);
  };

  return isLoaded && map_data?.length > 0 ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
      center={center}
    >
      {map_data
        .filter((item) =>
          selectedSlab
            ? selectedSlab === item.real_health_state?.toUpperCase()
            : true
        )
        .map((item, index) => {
          // Check if item has valid latitude and longitude

          const markerOptions = {
            icon: {
              url:
                item.real_health_state == "healthy"
                  ? "https://maps.google.com/mapfiles/ms/icons/green-dot.png"
                  : item?.real_health_state == "faulty"
                  ? "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
                  : item?.real_health_state == "disconnected"
                  ? "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
                  : "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
              scaledSize: new window.google.maps.Size(32, 32),
            },
          };
          if (item?.latitude && item?.longitude) {
            return (
              <Marker
                key={index}
                position={{ lat: item?.latitude, lng: item?.longitude }}
                options={markerOptions}
                onMouseOver={() => handleMarkerMouseOver(item)}
                onMouseOut={handleMarkerMouseOut}
              >
                {activeMarker === item ? (
                  <InfoWindow
                    position={{ lat: item?.latitude, lng: item?.longitude }}
                    onCloseClick={handleMarkerMouseOut}
                  >
                    <CardCallout
                      title={item?.station_name}
                      subtitle={item?.provider_name}
                    />
                  </InfoWindow>
                ) : null}
              </Marker>
            );
          }
        })}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export const MapComponent = React.memo(MapComponentCon);
