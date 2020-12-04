import React from 'react'
import '../Components/global.css'
import '../Components/Contacts.css'
import {withScriptjs,withGoogleMap,GoogleMap,Marker}from "react-google-maps";

const EDMMap=withScriptjs(withGoogleMap((props)=> 
       
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{lat:43.250247,lng:27.818259}}
        >
        <Marker position={{lat:43.250247,lng:27.818259}}/>

        </GoogleMap>
        
));

export default EDMMap