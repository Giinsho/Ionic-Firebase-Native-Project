import React from "react";

import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";


const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};

const ReactComponent = ({ text }) => (
  <div>
    <LocationOnIcon style={{ color: "red", fontSize: "90px" }}></LocationOnIcon>
    <Typography variant="h4" color={"white"}>
    {text}
    </Typography>
  </div>
);
export default function Location() {
  const defaultProps = {
    center: {
      lat: 52.166958,
      lng: 22.254124,
      
    },
    zoom: 20,
  };

    return (
      <>
        <div style={{margin: "5%"}}>
          <Typography variant="h3" color={"white"}>
            <p>You can find us</p> 
            <p>here...</p>
          </Typography>
        </div>
        <div
          style={{
              marginTop: "6em",
              height: '100vh',
              width: '100%',
            boxShadow: "-5px -5px 30px 15px violet, 5px 5px 30px 15px blue",
          }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "",
            }}
            defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    
          >
            <ReactComponent
              lat={defaultProps.center[0]}
              lng={defaultProps.center[1]}
            text={"Fitness club"}
            ></ReactComponent>
          </GoogleMapReact>
        </div>
      </>
    );
}
