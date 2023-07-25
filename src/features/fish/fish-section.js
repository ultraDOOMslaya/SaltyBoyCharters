import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { SaltyContainer, SaltySection } from '@features/shared/page-section';
import DeepSea1 from '@assets/images/scotty-with-grouper.jpeg';
import DeepSea2 from '@assets/images/ice-box-fish.jpeg';
import DeepSea3 from '@assets/images/fat-man-fish.jpeg';
import SaltyBoy1 from '@assets/images/bro-with-ugly-fish.jpg';
import SaltyBoy2 from '@assets/images/scotty-kids-snook.jpeg';
import SaltyBoy3 from '@assets/images/reeled-in.jpg';
const FishGallery = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  margin-bottom: 2rem;
  padding: 1rem;
  width: -webkit-fill-available;
`;
const Portrait = styled.div `
  display: flex;
  align-items: center;

  width: 20rem;
  margin-bottom: 1.0rem;

  img {
    width: 100%;
  }
`;
export const FishSection = () => {
    return (_jsxs(SaltyContainer, { children: [_jsx("p", { children: "THE FISH" }), _jsx(SaltySection, { children: _jsxs(FishGallery, { children: [_jsx(Portrait, { children: _jsx("img", { src: DeepSea1 }) }), _jsx(Portrait, { children: _jsx("img", { src: DeepSea2 }) }), _jsx(Portrait, { children: _jsx("img", { src: DeepSea3 }) })] }) }), _jsx(SaltySection, { children: _jsxs(FishGallery, { children: [_jsx(Portrait, { children: _jsx("img", { src: SaltyBoy1 }) }), _jsx(Portrait, { children: _jsx("img", { src: SaltyBoy2 }) }), _jsx(Portrait, { children: _jsx("img", { src: SaltyBoy3 }) })] }) })] }));
};
