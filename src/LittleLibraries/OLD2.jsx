// // An attempt using the original library but with the underlying google api

// import React, { useEffect } from "react";
// import lodash from "lodash";
// import styled from "@emotion/styled";
// import GoogleMapReact from "google-map-react";
// import { withRouteData } from "react-static";

// // components:
// // import Marker from "../components/Marker";

// const MapPage = styled.div`
//   position: relative;
// `;

// const Wrapper = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 18px;
//   height: 18px;
//   background-color: #000;
//   border: 2px solid #fff;
//   border-radius: 100%;
//   user-select: none;
//   transform: translate(-50%, -50%);
//   cursor: ${(props) => (props.onClick ? "pointer" : "default")};
//   &:hover {
//     z-index: 1;
//     background-color: red;
//   }
// `;

// const Marker = ({ text, onClick }) => <Wrapper alt={text} onClick={onClick} />;

// // examples:
// // import GoogleMap from "../components/GoogleMap";

// // const GMapWrapper = styled.main`
// //   width: 100%;
// //   height: 100%;
// // `;

// // const GoogleMap = ({ children, ...props }) => (
// //   <GMapWrapper>
// //     <GoogleMapReact {...props}>{children}</GoogleMapReact>
// //   </GMapWrapper>
// // );

// // consts
// // import LOS_ANGELES_CENTER from "../const/la_center";

// // Return map bounds based on list of places
// const getMapBounds = (map, maps, places) => {
//   const bounds = new maps.LatLngBounds();

//   places.forEach((place) => {
//     bounds.extend(
//       new maps.LatLng(place.geometry.location.lat, place.geometry.location.lng)
//     );
//   });
//   return bounds;
// };

// // Re-center map when resizing the window
// const bindResizeListener = (map, maps, bounds) => {
//   maps.event.addDomListenerOnce(map, "idle", () => {
//     maps.event.addDomListener(window, "resize", () => {
//       map.fitBounds(bounds);
//     });
//   });
// };

// // Fit map to its bounds after the api is loaded
// // const apiIsLoaded = (map, maps, places) => {
// //   // Get bounds by our places
// //   const bounds = getMapBounds(map, maps, places);
// //   // Fit map to bounds
// //   map.fitBounds(bounds);
// //   // Bind the resize listener
// //   bindResizeListener(map, maps, bounds);
// // };

// const getInfoWindowString = (place) => `
//     <div>
//       <div style="font-size: 16px;">
//         ${place.properties.title}
//       </div>
//       <div style="font-size: 14px;">
//         <span style="color: grey;">
//         ${place.rating || 5}
//         </span>
//       </div>

//       <div style="font-size: 14px; color: grey;">
//         ${"$".repeat(place.text)}
//       </div>

//     </div>`;

// const handleApiLoaded = (map, maps, places) => {
//   const markers = [];
//   const infowindows = [];
//   console.log({ infowindows });

//   places.forEach((place) => {
//     markers.push(
//       new maps.Marker({
//         position: {
//           lat: place.geometry.location.lat,
//           lng: place.geometry.location.lng,
//         },
//         map,
//       })
//     );

//     infowindows.push(
//       new maps.InfoWindow({
//         content: getInfoWindowString(place),
//       })
//     );
//   });

//   markers.forEach((marker, i) => {
//     marker.addListener("click", () => {
//       infowindows[i].open(map, marker);
//     });
//   });
// };

// const defaultCenter = [64.646399, -133.913028];

// const LibrariesMap = ({ libraries }) => {
//   const places = libraries.map((lib) => ({
//     type: "Feature",
//     properties: {
//       cluster: false,
//       title: lib.title,
//       steward: lib.steward,
//       stewardContact: lib.stewardContact,
//       image: lib.image,
//       id: lib.id + lib.xCoordinates,
//       category: "book",
//       description: lib.description,
//     },
//     geometry: {
//       type: "Point",
//       location: {
//         // WARNING THE MAKER OF THIS LIBRARY FUCKED UP LAT AND LNG
//         lat: parseFloat(lib.xCoordinates),
//         lng: parseFloat(lib.yCoordinates),
//       },
//     },
//   }));
//   useEffect(() => {}, []);

//   return (
//     <>
//       <MapPage style={{ height: "100vh", width: "100%" }}>
//         {!lodash.isEmpty(places) && (
//           <GoogleMapReact
//             bootstrapURLKeys={{ key: "" }}
//             defaultZoom={10}
//             defaultCenter={defaultCenter}
//             yesIWantToUseGoogleMapApiInternals
//             onGoogleApiLoaded={({ map, maps }) =>
//               // apiIsLoaded(map, maps, places)
//               handleApiLoaded(map, maps, places)
//             }
//           />
//         )}
//       </MapPage>
//     </>
//   );
// };

// export default withRouteData(LibrariesMap);

// {
//   /* {places.map((place) => {
//               console.log({ place });
//               return (
//                 <Marker
//                   key={place.properties.id}
//                   text={place.properties.description}
//                   lat={place.geometry.location.lat}
//                   lng={place.geometry.location.lng}
//                 />
//               );
//             })} */
// }
// {
//   /* </GoogleMapReact> */
// }
