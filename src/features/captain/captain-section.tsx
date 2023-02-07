import React from 'react'
import styled from 'styled-components';
import * as Colors from '@features/theme/colors';
import { SaltyContainer } from '@features/shared/page-section';
import Scotty from '@assets/images/scotty-with-grouper.jpeg';
import SaltyBoy1 from '@assets/images/bro-with-ugly-fish.jpg';

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

  height: 10rem;

  border: 2px solid #000;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.8);
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
          <CaptainsPortrait src={Scotty} />
          <CaptainInfo>
            <b>Scotty Darna</b>
            <div>Bokeelia, Florida, United States</div>
            <br />
            <p>
              Captain Scotty Darna is one of the few true Pine Island natives, and a 5th generation fisherman. 
              He has spent his entire life fishing and working on the local waters both as a guide and a commercial fisherman.
              Captain Scotty has a joy of sharing his knowledge and experience of fishing others, and as a father of 3 he especially loves teaching kids a new skill and getting them out on the water for a memorable day.
              He is a valued member of his community as a firefighter with the Matlacha/Pine Island fire department. Has has many stories to tell and is excited to get you and your family/friends out on the water.
            </p>
          </CaptainInfo>
        </CaptainCard>
      </SaltyContainer>
    </SaltyContainer>
  );
}
