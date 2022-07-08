import React from 'react'
import styled from 'styled-components';
import * as Colors from '@features/theme/colors';
import { SaltyContainer } from '@features/shared/page-section';
import Scotty from '@assets/images/scotty-with-grouper.jpeg';

const CaptainCard = styled.div`
  display: flex;
  flex-direction: row;

  position: relative;
  margin-bottom: 2rem;
  padding: 2rem;
  width: 80%;

  background-color: ${Colors.slateBlue};  
`;

const CaptainsPortrait = styled.img`
  display: flex;

  height: 20rem;

  border: 2px solid #000;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.8);
`;

const CaptainInfo = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;

  font-size: 16px;
`;

export const CaptainSection = () => {
  console.log("scotty is: {}", Scotty);
  return (
    <SaltyContainer>
      THE CAPTAIN
      <SaltyContainer>
        <CaptainCard>
          <CaptainInfo>
            <b>Scotty Darna</b>
            <div>Sanibel, Florida, United States</div>
            <br />
            <p>
            Captain Scotty Darna is a fifth-generation fisherman, born and raised on Pine Island. Being on the water comes as naturally to him as breathing. He's been a guide for the past decade and has no intention of slowing down. Putting people on the fish is what Capt. Scotty does best, but he's also very passionate about fishing tournaments and has some amazing stories to tell.
            </p>
          </CaptainInfo>
        </CaptainCard>
      </SaltyContainer>
    </SaltyContainer>
  );
}
