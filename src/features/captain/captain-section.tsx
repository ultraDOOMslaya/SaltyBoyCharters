import React from 'react'
import styled from 'styled-components';
import * as Colors from '@features/theme/colors';
import { SaltyContainer } from '@features/shared/page-section';

const CaptainCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  position: relative;
  margin-bottom: 2rem;
  width: 60%;
  padding: 2rem;

  background-color: ${Colors.lightTurqoise};
  box-shadow: 2px 1px 1px black;
  border-radius: 5px;
  
`;

const CaptainInfo = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;

  font-size: 16px;
`;

export const CaptainSection = () => {
  
  return (
    <SaltyContainer>
      THE CAPTAIN
      <SaltyContainer>
        <CaptainCard>
          <iframe 
            width={420} 
            height={315} 
            src="https://fishingbooker.wistia.com/medias/9w2ai2ss1k" 
            scrolling='no'
          />
          <CaptainInfo>
            <b>Scotty Darna</b>
            <div style={{Color: Colors.darkGray}}>Sanibel, Florida, United States</div>
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
