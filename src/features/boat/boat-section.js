import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Colors from '@features/theme/colors';
import styled from 'styled-components';
import InshoreBoatImage from '@assets/images/inshore-boat.jpeg';
import OffshoreBoatImage from '@assets/images/offshore-boat.jpeg';
const BoatsContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

  width: -webkit-fill-available;
  margin-top: 2rem;

  background-color: ${Colors.slateBlue};
`;
const BoatsSection = styled.div `
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;

  width: -webkit-fill-available;
`;
const BoatCard = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 25rem;
  padding-right: 1.0rem;
  padding-left: 1.0rem;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
`;
const BoatCardImage = styled.img `
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;
const BoatCardDescription = styled.div `
  color: ${Colors.whiteSmoke};
  font-size: 16px;

  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const BoatCardDescriptionSpecs = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;
const Spec = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-size: 16px;
`;
const SpecLabel = styled.div `
  font-size: 16px;
  color: ${Colors.whiteSmoke};
`;
const SpecValue = styled.div `
  font-size: 16px;
  color: ${Colors.lightGray};
`;
export const BoatSection = () => {
    return (_jsxs(BoatsContainer, { children: [_jsx("p", { children: "THE BOATS" }), _jsxs(BoatsSection, { children: [_jsxs(BoatCard, { children: [_jsx("b", { children: "DEEP SEA" }), _jsx(BoatCardImage, { src: OffshoreBoatImage }), _jsx(BoatCardDescription, { children: "Offshore charters take place on our 28' Parker. Federally permitted, our boat willt ake you miles and miles offshore where you can catch a variety of snapper (Red Snapper June-August), Grouper, Cobia, Porgy, Kingfish, Blackfin Tuna and more. Boat is Equiped with advanced fish finding and navigation equipment, ice box, livewell, closed cabin, and a toilet." }), _jsxs(BoatCardDescriptionSpecs, { children: [_jsxs(Spec, { children: [_jsx("div", { style: { color: Colors.whiteSmoke }, children: "Length" }), _jsx("div", { style: { color: Colors.lightGray }, children: "36ft" })] }), _jsxs(Spec, { children: [_jsx("div", { style: { color: Colors.whiteSmoke }, children: "Capacity" }), _jsx("div", { style: { color: Colors.lightGray }, children: "6 persons" })] })] })] }), _jsxs(BoatCard, { children: [_jsx("b", { children: "INSHORE" }), _jsx(BoatCardImage, { src: InshoreBoatImage }), _jsx(BoatCardDescription, { children: "Our inshore charter boat was custom built by Captain Scotty himself, perfect for a day of fishing close to shore and the backwaters of southwest florida. 4, 6, or 8 hour trips available. Catch a variety of fish such as Mangrove, Snapper, Snook, Redfish, Trout, Gag, Goliath Grouper, Sharks, and more." }), _jsxs(BoatCardDescriptionSpecs, { children: [_jsxs(Spec, { children: [_jsx("div", { style: { color: Colors.whiteSmoke }, children: "Length" }), _jsx("div", { style: { color: Colors.lightGray }, children: "24ft" })] }), _jsxs(Spec, { children: [_jsx("div", { style: { color: Colors.whiteSmoke }, children: "Capacity" }), _jsx("div", { style: { color: Colors.lightGray }, children: "5 persons" })] })] })] })] })] }));
};
