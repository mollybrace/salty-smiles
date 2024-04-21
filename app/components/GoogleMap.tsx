"use client"
import React, { useEffect } from 'react'
import { Loader, LoaderStatus } from '@googlemaps/js-api-loader';

const GoogleMap = () => {
    
   
        const mapRef = React.useRef<HTMLDivElement>(null);

        useEffect(() => {
            const initMap = async () => {

              const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
                version: "weekly",
              });

              const { Map } = await loader.importLibrary("maps");

              const {Marker } = await loader.importLibrary("marker") as google.maps.MarkerLibrary


              const position = {
                lat: 15.583586,
                lng: 73.749151
              }

              const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 14,
                mapId: "MY_ID"

              }

              const map = new Map(mapRef.current as HTMLDivElement, mapOptions)

              const marker = new Marker ({
                map: map,
                position: position 
              })
            }

            initMap()
        }, [])
  return (
    <div className='flex-1'>
    <div className='h-[500px] md:w-[500px]' ref={mapRef}>
    

    </div>
    </div>
  )
}

export default GoogleMap


/*
  <GoogleMapReact
        bootstrapURLKeys={apiKey}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}>
        <AnyReactComponent    
          lat={15.569850}
          lng={73.754460}
          text="My Marker"/>
      </GoogleMapReact>
      */