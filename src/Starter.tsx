import React, { useState } from 'react'
import { BoatSection } from '@features/boat/boat-section';
import { FishSection } from '@features/fish/fish-section';
import { CaptainSection } from '@features/captain/captain-section';
import './App.css'
import * as Colors from '@features/theme/colors';
import * as Sizing from '@features/theme/sizing';
import styled from 'styled-components';
import SaltyBoyLogo from '@assets/images/salty-boy-logo.jpg';

const AppContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: -webkit-fill-available;
  margin-top: ${Sizing.topBarHeight};
  font-size: calc(10px + 2vmin);

  color: ${Colors.whiteSmoke};
  background: radial-gradient(
    circle at top left,
    ${Colors.lightBlue} 0,
    ${Colors.slateBlue} 100%
  );
`;

const AppBannerLogo = styled.img`
  width: 100%;

  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(to left, ${Colors.silver}, ${Colors.whiteSmoke});
`;

const AppBannerText = styled.div`
  text-align: center;
`;



function Starter() {
  const [count, setCount] = useState(0);

  return (
    <AppContainer>
      <AppBannerLogo src={SaltyBoyLogo} />
      <AppBannerText>
        Pine&nbsp;Island | Cape&nbsp;Coral | Fort&nbsp;Myers | Sanibel
      </AppBannerText>
      <AppBannerText>
        Deep Sea & Inshore Fishing Guide
      </AppBannerText>
      <BoatSection />
      <FishSection />
      <CaptainSection />
    </AppContainer>
  )
}

export default Starter
