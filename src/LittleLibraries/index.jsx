// Excellent example https://codesandbox.io/s/react-google-maps-api-ir5ks?file=/src/index.js:3110-3128
// docs https://react-google-maps-api-docs.netlify.app/#infowindow
// https://www.youtube.com/watch?v=2po9_CIRW7I&amp;ab_channel=LeighHalliday

import React, { useState } from "react";
import styled from "@emotion/styled";
// import { css } from "@emotion/react/macro";
import {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";
import { withRouteData } from "react-static";
import logo from "../assets/dark_flake.png";
import { Link as RRLink } from "@reach/router";
import book from "../assets/book_white_border.png";
// import book from "../assets/book.svg";
import "./mapStyles.css";
import Carousel, { ModalLayerComponent } from "../shared/Carousel";

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

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const AddressSection = styled.div`
  padding: 4px 0;
`;

const InfoPanelContainer = styled.div`
  max-width: 230px;
`;

const LogoSection = ({ logo }) => {
  return (
    <LogoTitleWrapper>
      <LogoWrapper>
        <RRLink to="/">
          <Logo src={logo} alt="" />
        </RRLink>
      </LogoWrapper>
    </LogoTitleWrapper>
  );
};

const CarouselContainer = styled.div`
  height: 100px;
  max-width: 230px;
`;

const Description = styled.h4``;

const LittleLibraries = (props) => {
  const { libraries, isCMS, apiKey } = props;
  const [infoOpen, setInfoOpen] = useState(false);
  const [markerMap, setMarkerMap] = useState({});
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [zoom, setZoom] = useState(6);
  const [center, setCenter] = useState({ lat: 64.646399, lng: -133.913028 });
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(false);
  const points = libraries.map((lib) => ({
    type: "Feature",
    properties: {
      address: lib.address,
      city: lib.city,
      territoryProvince: lib.territoryProvince,
      postalCode: lib.postalCode,
      country: lib.country,
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

  const Loading = <div />;
  const googleMapsLibraries = ["drawing", "visualization", "places"];
  const onLoad = () => console.log("script loaded");
  const onError = (err) => console.log("onError: ", err);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    region: "EN",
    version: "weekly",
    onLoad: { onLoad },
    onError: { onError },
    libraries: { googleMapsLibraries },
    // preventGoogleFontsLoading:{false},
    loadingElement: { Loading },
  });

  const renderMap = () => {
    return (
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
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
                  icon={book}
                  // icon={<div>hello</div>}
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
            <InfoPanelContainer>
              {selectedPlace?.properties?.title && (
                <h3>{selectedPlace?.properties?.title}</h3>
              )}
              {selectedPlace?.properties?.description && (
                <Description>
                  {selectedPlace?.properties?.description}
                </Description>
              )}
              {selectedPlace?.properties?.address && (
                <AddressSection>
                  <div>{selectedPlace?.properties?.address}</div>
                  <div>
                    {selectedPlace?.properties?.city}
                    {selectedPlace?.properties?.territoryProvince && (
                      <span>
                        {", "}
                        {selectedPlace?.properties?.territoryProvince}
                      </span>
                    )}{" "}
                    {selectedPlace?.properties?.postalCode}
                  </div>
                  {selectedPlace?.properties?.country && (
                    <div>{selectedPlace?.properties?.country}</div>
                  )}
                </AddressSection>
              )}
              {selectedPlace?.properties?.steward && (
                <div>
                  <strong>Steward: {selectedPlace?.properties?.steward}</strong>
                </div>
              )}
              {selectedPlace?.properties?.stewardContact && (
                <div>
                  <strong>
                    Steward Contact: {selectedPlace?.properties?.stewardContact}
                  </strong>
                </div>
              )}
              {!!selectedPlace?.properties?.imagesVideosList?.length && (
                <CarouselContainer>
                  <Carousel
                    media={selectedPlace?.properties?.imagesVideosList}
                    isCMS={isCMS}
                    isLibrary={true}
                    {...{
                      modalVisibleProp: modalVisible,
                      setModalVisibleProp: setModalVisible,
                      currentImageProp: currentImage,
                      setCurrentImageProp: setCurrentImage,
                      width: 150,
                    }}
                    ModalLayerExterior={true}
                  />
                </CarouselContainer>
              )}
            </InfoPanelContainer>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? (
    <MapPage style={{ height: "100vh", width: "100%" }}>
      <LogoSection logo={logo} /> {renderMap()}
      <ModalLayerComponent
        {...{ modalVisible, setModalVisible, currentImage }}
        onOverlayClick={() => setCurrentImage(false)}
      />
    </MapPage>
  ) : (
    <div>NOT LOADED</div>
  );

  // CURRENTLY UNUSED (TRYING THE useLoadScript HOOK)
  return (
    <MapPage style={{ height: "100vh", width: "100%" }}>
      <LogoSection logo={logo} />
      <LoadScript
        id={"uniqueid_123"}
        // googleMapsApiKey="AIzaSyDl53gARUuHmvatd1nfRN_0Zeje58Rv-jg"
        googleMapsApiKey={apiKey}
        region="EN"
        version="weekly"
        onLoad={onLoad}
        onError={onError}
        libraries={googleMapsLibraries}
        preventGoogleFontsLoading={false}
        loadingElement={Loading}
      >
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
                    icon={book}
                    // icon={<div>hello</div>}
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
              <InfoPanelContainer>
                {selectedPlace?.properties?.title && (
                  <h3>{selectedPlace?.properties?.title}</h3>
                )}
                {selectedPlace?.properties?.description && (
                  <Description>
                    {selectedPlace?.properties?.description}
                  </Description>
                )}
                {selectedPlace?.properties?.address && (
                  <AddressSection>
                    <div>{selectedPlace?.properties?.address}</div>
                    <div>
                      {selectedPlace?.properties?.city}
                      {selectedPlace?.properties?.territoryProvince && (
                        <span>
                          {", "}
                          {selectedPlace?.properties?.territoryProvince}
                        </span>
                      )}{" "}
                      {selectedPlace?.properties?.postalCode}
                    </div>
                    {selectedPlace?.properties?.country && (
                      <div>{selectedPlace?.properties?.country}</div>
                    )}
                  </AddressSection>
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
                {!!selectedPlace?.properties?.imagesVideosList?.length && (
                  <CarouselContainer>
                    <Carousel
                      media={selectedPlace?.properties?.imagesVideosList}
                      isCMS={isCMS}
                      isLibrary={true}
                      {...{
                        modalVisibleProp: modalVisible,
                        setModalVisibleProp: setModalVisible,
                        currentImageProp: currentImage,
                        setCurrentImageProp: setCurrentImage,
                        width: 150,
                      }}
                      ModalLayerExterior={true}
                    />
                  </CarouselContainer>
                )}
              </InfoPanelContainer>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
      <ModalLayerComponent
        {...{ modalVisible, setModalVisible, currentImage }}
        onOverlayClick={() => setCurrentImage(false)}
      />
    </MapPage>
  );
};

export default withRouteData(LittleLibraries);
