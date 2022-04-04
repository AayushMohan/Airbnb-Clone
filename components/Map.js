import { useEffect, useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { getCenter } from 'geolib'
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = process.env.mapbox_key

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({})

  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }))

  const center = getCenter(coordinates)

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  })

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/aayushmohan/cl1kpjbgl00nm14o34jipc12z"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-20}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="animate-bounce cursor-pointer text-2xl"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>

          {/* The Popup that should show if we click on a Marker */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map
