import { useState } from 'react'
import { BoatSection } from '@features/boat/boat-section';
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
  min-height: 100vh;
  font-size: calc(10px + 2vmin);

  color: ${Colors.pureWhite};
  background-color: ${Colors.slateBlue};
`;

const AppBannerLogo = styled.img`
  width: 100%;

  background-blend-mode: screen;
  background-image: ${SaltyBoyLogo};
  background-color: ${Colors.slateBlue};
  background-size: cover;
`;

const AppBannerText = styled.div``;



function Starter() {
  const [count, setCount] = useState(0);

  return (
    <AppContainer>
      <AppBannerLogo src={SaltyBoyLogo} />
      <AppBannerText>
        Pine Island &nbsp;|&nbsp; Cape Coral &nbsp;|&nbsp; Fort Myers &nbsp;|&nbsp; Sanibel
      </AppBannerText>
      <AppBannerText>
        Deep Sea & Inshore Fishing Guide
      </AppBannerText>
      <BoatSection />
    </AppContainer>
  )
}

export default Starter
