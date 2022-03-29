// REMOVED
// "supercluster": "^7.1.4",
// "use-supercluster": "^0.4.0"
// "google-map-react": "^2.1.10",

// Using original library with react components

// import React, { useState, useRef } from "react";
// import { withRouteData } from "react-static";
// import GoogleMapReact from "google-map-react";
// import styled from "@emotion/styled";
// import { Link as RRLink } from "@reach/router";
// import useSupercluster from "use-supercluster";
// import { StyledMarkdown } from "../shared/Features";
// import Carousel from "../shared/Carousel";

// import logo from "../assets/dark_flake.png";
// import bookLogo from "../assets/ylc_books.png";
// import openBook from "../assets/ylc_open_book.png";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// const MapPage = styled.div`
//   position: relative;
// `;

// const BookIconWrapper = styled.div`
//   height: 40px;
//   width: 40px;
//   background: white;
//   padding: 10px;
//   border: 40px 1px solid;
//   border-radius: 50px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   img {
//     height: 30px;
//     width: 30px;
//   }
//   transition: all 0.2s;
//   &:hover {
//     transform: scale(1.2);
//     transform-origin: center;
//   }
//   ${(p) => p.isSelected && "transform: scale(1.2); transform-origin: center;"}
// `;

// const LogoWrapper = styled.div`
//   position: absolute;
//   top: 10px;
//   left: 10px;
//   z-index: 10;
//   background: white;
//   border-radius: 50px;
//   border: ${(p) => p.theme.colors.ylc_blue} 5px solid;
// `;

// const Logo = styled.img`
//   height: 50px;
//   width: 50px;
// `;

// const PointCount = styled.span`
//   font-size: 12px;
//   font-weight: bold;
// `;

// const LogoSection = ({ logo }) => {
//   return (
//     <LogoWrapper>
//       <RRLink to="/">
//         <Logo src={logo} alt="" />
//       </RRLink>
//     </LogoWrapper>
//   );
// };

// const IconInfoWrapper = styled.div`
//   cursor: pointer;
// `;

// const ClusterMarker = styled(IconInfoWrapper)``;

// // MARKER THINGS

// const Marker = ({ children }) => children;

// const MarkerImage = styled.div`
//   height: 100%;
//   background-image: url(${(p) => p?.image});
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: center;
// `;

// const MarkerImageContainer = styled.div`
//   width: 100%;
//   height: 150px;
//   padding: 2px;
// `;

// const LibraryTitle = styled.div`
//   ${(p) => p.theme.fonts.extra_small_header}
//   text-align: center;
//   padding-bottom: 5px;
// `;

// const StewardContact = styled.div`
//   padding: 3px 0;
// `;

// const DescriptionContainer = styled.div`
//   padding-top: 3px;
//   font-weight: bold;
// `;

// const InfoWindowContainer = styled.div`
//   position: relative;
//   bottom: 50;
//   left: 50;
//   min-width: 260px;
//   background: white;
//   box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.3);
//   padding: 10px;
//   z-index: 100;
//   ${(p) => p.theme.fonts.body_text}
//   font-size: 14px;
// `;

// const InfoWindow = ({ cluster }) => {
//   console.log({ cluster });

//   return (
//     <InfoWindowContainer>
//       <LibraryTitle>
//         {cluster?.properties?.title || "No Library Title"}
//       </LibraryTitle>

//       {cluster?.properties?.steward && (
//         <StewardContact>
//           Library Steward: {cluster.properties.steward}
//         </StewardContact>
//       )}
//       {cluster?.properties?.stewardContact && (
//         <StewardContact>
//           Steward Contact: {cluster.properties.stewardContact}
//         </StewardContact>
//       )}
//       {cluster?.properties?.description && (
//         <DescriptionContainer>
//           {
//             <StyledMarkdown
//               source={cluster?.properties?.description}
//               escapeHtml={false}
//             />
//           }
//         </DescriptionContainer>
//       )}

//       {cluster?.properties?.image && (
//         <MarkerImageContainer>
//           <MarkerImage image={cluster.properties.image} alt="" />
//         </MarkerImageContainer>
//       )}
//     </InfoWindowContainer>
//   );
// };

// const LibrariesMap = ({ libraries }) => {
//   const mapRef = useRef();
//   const [bounds, setBounds] = useState(null);
//   const [zoom, setZoom] = useState(10);
//   const [infoVisible, setInfoVisible] = useState(null);
//   console.log({ infoVisible });

//   const handleMarkerClick = (id) => {
//     if (infoVisible === id) {
//       setInfoVisible(null);
//     } else {
//       setInfoVisible(id);
//     }
//   };

//   const points = libraries.map((lib) => ({
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
//       coordinates: [parseFloat(lib.yCoordinates), parseFloat(lib.xCoordinates)],
//     },
//   }));

//   const { clusters, supercluster } = useSupercluster({
//     points,
//     bounds,
//     zoom,
//     options: { radius: 20, maxZoom: 20 },
//   });

//   const defaultProps = {
//     center: {
//       lat: 64.646399,
//       lng: -133.913028,
//     },
//     zoom: 6,
//   };

//   return (
//     // Important! Always set the container height explicitly
//     <MapPage style={{ height: "100vh", width: "100%" }}>
//       <LogoSection logo={logo} />
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//         // yesIWantToUseGoogleMapApiInternals
//         onGoogleApiLoaded={({ map }) => {
//           mapRef.current = map;
//         }}
//         onChange={({ zoom, bounds }) => {
//           setZoom(zoom);
//           setBounds([
//             bounds.nw.lng,
//             bounds.se.lat,
//             bounds.se.lng,
//             bounds.nw.lat,
//           ]);
//         }}
//       >
//         {clusters.map((cluster) => {
//           const [longitude, latitude] = cluster.geometry.coordinates;
//           const { cluster: isCluster, point_count: pointCount } =
//             cluster.properties;

//           if (isCluster) {
//             return (
//               <Marker
//                 key={`cluster-${cluster.id}`}
//                 lat={latitude}
//                 lng={longitude}
//               >
//                 <ClusterMarker
//                   style={{
//                     width: `${10 + (pointCount / points.length) * 20}px`,
//                     height: `${10 + (pointCount / points.length) * 20}px`,
//                   }}
//                   onClick={() => {
//                     const expansionZoom = Math.min(
//                       supercluster.getClusterExpansionZoom(cluster.id),
//                       20
//                     );
//                     mapRef.current.setZoom(expansionZoom);
//                     mapRef.current.panTo({ lat: latitude, lng: longitude });
//                   }}
//                 >
//                   <BookIconWrapper>
//                     {<PointCount>{pointCount}</PointCount>}
//                   </BookIconWrapper>
//                 </ClusterMarker>
//               </Marker>
//             );
//           }
//           return (
//             <Marker
//               key={`book-${cluster.properties.title}`}
//               lat={latitude}
//               lng={longitude}
//             >
//               <IconInfoWrapper
//                 onClick={() => handleMarkerClick(cluster.properties.id)}
//               >
//                 <BookIconWrapper
//                   isSelected={infoVisible === cluster.properties.id}
//                 >
//                   <img src={openBook} alt="" />
//                 </BookIconWrapper>
//                 {infoVisible === cluster.properties.id && (
//                   <InfoWindow cluster={cluster} />
//                 )}
//               </IconInfoWrapper>
//             </Marker>
//           );
//         })}
//       </GoogleMapReact>
//     </MapPage>
//   );
// };

// export default withRouteData(LibrariesMap);

// {
//   /* <AnyReactComponent
// lat={64.646399}
// lng={-133.913028}
// text={
//   <BookIconWrapper>
//     <img src={openBook} alt="" />
//   </BookIconWrapper>
// }
// /> */
// }
