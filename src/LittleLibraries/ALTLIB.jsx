// // https://react-google-maps-api-docs.netlify.app/#section-introduction

// import React, { useCallback } from "react";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";
// import { useJsApiLoader } from "@react-google-maps/api";
// import { MarkerClusterer } from "@react-google-maps/api";
// import styled from "@emotion/styled";
// import { google } from "@google/maps";

// const containerStyle = {
//   height: "100vh",
//   width: "100%",
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };

// const options = {
//   zoomControlOptions: {
//     // position: google.maps.ControlPosition.RIGHT_CENTER, // 'right-center' ,
//     // ...otherOptions
//   },
// };

// function MyComponent() {
//   const { isLoaded, loadError } = useJsApiLoader({
//     googleMapsApiKey: "",
//     // ...otherOptions
//   });

//   const renderMap = () => {
//     // wrapping to a function is useful in case you want to access `window.google`
//     // to eg. setup options or create latLng object, it won't be available otherwise
//     // feel free to render directly if you don't need that
//     const onLoad = useCallback(function onLoad(mapInstance) {
//       // do something with map Instance
//     }, []);
//     return (
//       <GoogleMap
//         options={options}
//         onLoad={onLoad}
//         mapContainerStyle={containerStyle}
//         zoom={10}
//         center={center}
//       >
//         {
//           // ...Your map components
//         }
//       </GoogleMap>
//     );
//   };

//   if (loadError) {
//     return <div>Map cannot be loaded right now, sorry.</div>;
//   }

//   const Spinner = () => {
//     return <div>Spinner</div>;
//   };
//   return isLoaded ? renderMap() : <Spinner />;
// }

// export default MyComponent;
