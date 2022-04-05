// Excellent example https://codesandbox.io/s/react-google-maps-api-ir5ks?file=/src/index.js:3110-3128
// docs https://react-google-maps-api-docs.netlify.app/#infowindow

// "@google/maps": "^1.1.3",
//     "@googlemaps/react-wrapper": "^1.1.27",
//     "@googlemaps/typescript-guards": "^1.0.10",

import React, { useState } from "react";
import styled from "@emotion/styled";
// import { css } from "@emotion/react/macro";
import {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { withRouteData } from "react-static";
import logo from "../assets/dark_flake.png";
import { Link as RRLink } from "@reach/router";
import openBook from "../assets/ylc_open_book.png";
import book from "../assets/book.svg";
import "./mapStyles.css";
import Carousel from "../shared/Carousel";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const clustererOptions = {};

// const clusterClass = css`
//   background: red;
// `;

const MapPage = styled.div`
  position: relative;
`;

const LogoWrapper = styled.div`
  /* position: absolute;
  top: 10px;
  left: 50%;
  z-index: 10; */
  background: white;
  border-radius: 50px;
  border: ${(p) => p.theme.colors.ylc_blue} 5px solid;
`;

const LogoTitleWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  left: 50%;
  z-index: 10;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

// const TitleWords = styled.span`
//   font-weight: bold;
//   padding: 0 10px;
//   font-size: 30px;
// `;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const LogoSection = ({ logo }) => {
  return (
    <LogoTitleWrapper>
      {/* <TitleWords>Little</TitleWords> */}
      <LogoWrapper>
        <RRLink to="/">
          <Logo src={logo} alt="" />
        </RRLink>
      </LogoWrapper>
      {/* <TitleWords>Libraries</TitleWords> */}
    </LogoTitleWrapper>
  );
};

const CarouselContainer = styled.div`
  height: 100px;
`;

const LittleLibraries = ({ libraries, isCMS }) => {
  const [infoOpen, setInfoOpen] = useState(false);
  const [markerMap, setMarkerMap] = useState({});
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [zoom, setZoom] = useState(5);
  const [center, setCenter] = useState({ lat: 64.646399, lng: -133.913028 });
  console.log({ libraries });
  const points = libraries.map((lib) => ({
    type: "Feature",
    properties: {
      address: lib.address,
      description: lib.description,
      id: lib.id + lib.xCoordinates,
      steward: lib.steward,
      stewardContact: lib.stewardContact,
      title: lib.title,
      image: lib.image,
      imagesVideosList: lib.imagesVideosList,
    },
    geometry: {
      lat: parseFloat(lib.xCoordinates),
      lng: parseFloat(lib.yCoordinates),
    },
  }));

  function createKey(location) {
    console.log({ lat: location.geometry.lat });
    return location.geometry.lat + location.geometry.lng;
  }

  const markerLoadHandler = (marker, place) => {
    return setMarkerMap((prevState) => {
      return { ...prevState, [place.properties.id]: marker };
    });
  };

  const markerClickHandler = (event, place) => {
    setSelectedPlace(place);

    if (infoOpen) {
      setInfoOpen(false);
    }

    setInfoOpen(true);

    // if (zoom < 13) {
    //   setZoom(13);
    // }

    // setCenter(place.geometry);
  };

  console.log("images", selectedPlace?.properties?.imagesVideosList);

  return (
    <MapPage style={{ height: "100vh", width: "100%" }}>
      <LogoSection logo={logo} />
      <LoadScript googleMapsApiKey="AIzaSyDl53gARUuHmvatd1nfRN_0Zeje58Rv-jg">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
        >
          <MarkerClusterer
            options={clustererOptions}
            averageCenter={true}
            // clusterClass={"map-styles"}
            // styles={[]}
          >
            {(clusterer) =>
              points.map((point) => {
                return (
                  <Marker
                    key={createKey(point)}
                    position={point.geometry}
                    clusterer={clusterer}
                    onClick={(event) => markerClickHandler(event, point)}
                    onLoad={(marker) => markerLoadHandler(marker, point)}
                    // icon={book}
                    icon={<div>hello</div>}
                  />
                );
              })
            }
          </MarkerClusterer>
          {infoOpen && selectedPlace && (
            <InfoWindow
              anchor={markerMap[selectedPlace?.properties?.id]}
              onCloseClick={() => setInfoOpen(false)}
            >
              <div>
                {selectedPlace?.properties?.title && (
                  <h3>{selectedPlace?.properties?.title}</h3>
                )}
                {selectedPlace?.properties?.description && (
                  <h4>{selectedPlace?.properties?.description}</h4>
                )}
                {selectedPlace?.properties?.address && (
                  <div>{selectedPlace?.properties?.address}</div>
                )}
                {selectedPlace?.properties?.steward && (
                  <div>
                    <strong>
                      Steward: {selectedPlace?.properties?.steward}
                    </strong>
                  </div>
                )}
                {selectedPlace?.properties?.stewardContact && (
                  <div>
                    <strong>
                      Steward Contact:{" "}
                      {selectedPlace?.properties?.stewardContact}
                    </strong>
                  </div>
                )}
                {selectedPlace?.properties?.imagesVideosList && (
                  <CarouselContainer>
                    <Carousel
                      media={selectedPlace?.properties?.imagesVideosList}
                      isCMS={isCMS}
                    />
                  </CarouselContainer>
                  // <div>
                  //   {/* {selectedPlace?.properties?.imagesVideosList.map(
                  //     (media) => {
                  //       console.log(media);
                  //       return <img src={media} alt="" />;
                  //     }
                  //   )} */}
                  // </div>
                )}
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </MapPage>
  );
};

export default withRouteData(LittleLibraries);

// function createKey(location) {
//   return location.lat + location.lng;
// }

// const fakePoints = [
//   { lat: -31.56391, lng: 147.154312 },
//   { lat: -33.718234, lng: 150.363181 },
//   { lat: -33.727111, lng: 150.371124 },
//   { lat: -33.848588, lng: 151.209834 },
//   { lat: -33.851702, lng: 151.216968 },
//   { lat: -34.671264, lng: 150.863657 },
//   { lat: -35.304724, lng: 148.662905 },
//   { lat: -36.817685, lng: 175.699196 },
//   { lat: -36.828611, lng: 175.790222 },
//   { lat: -37.75, lng: 145.116667 },
//   { lat: -37.759859, lng: 145.128708 },
//   { lat: -37.765015, lng: 145.133858 },
//   { lat: -37.770104, lng: 145.143299 },
//   { lat: -37.7737, lng: 145.145187 },
//   { lat: -37.774785, lng: 145.137978 },
//   { lat: -37.819616, lng: 144.968119 },
//   { lat: -38.330766, lng: 144.695692 },
//   { lat: -39.927193, lng: 175.053218 },
//   { lat: -41.330162, lng: 174.865694 },
//   { lat: -42.734358, lng: 147.439506 },
//   { lat: -42.734358, lng: 147.501315 },
//   { lat: -42.735258, lng: 147.438 },
//   { lat: -43.999792, lng: 170.463352 },
// ];

// const onLoad = (infoWindow) => {
//   console.log("infoWindow: ", infoWindow);
// };
// const divStyle = {
//   background: `white`,
//   border: `1px solid #ccc`,
//   padding: 15,
// };

// const markerClickHandler = (event, place) => {
//   // Remember which place was clicked
//   setSelectedPlace(place);

//   // Required so clicking a 2nd marker works as expected
//   if (infoOpen) {
//     setInfoOpen(false);
//   }

//   setInfoOpen(true);

//   // If you want to zoom in a little on marker click
//   // if (zoom < 13) {
//   //   setZoom(13);
//   // }

//   // if you want to center the selected Marker
//   //setCenter(place.pos)
// };
