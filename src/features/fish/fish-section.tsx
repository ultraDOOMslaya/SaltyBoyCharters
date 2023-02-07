import React from 'react'
import styled from 'styled-components';
import * as Colors from '@features/theme/colors';
import { SaltyContainer, SaltySection } from '@features/shared/page-section';
import SaltyBoy1 from '@assets/images/bro-with-ugly-fish.jpg';
import SaltyBoy2 from '@assets/images/scotty-kids-snook.jpeg';
import SaltyBoy3 from '@assets/images/reeled-in.jpg';


const FishGallery = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  margin-bottom: 2rem;
  padding: 1rem;
  width: -webkit-fill-available;
`;

const Portrait = styled.div`
  display: flex;
  align-items: center;

  width: 20rem;
  margin-bottom: 1.0rem;

  img {
    width: 100%;
  }
`;

export const FishSection = () => {
  
  return (
    <SaltyContainer>
      <p>THE FISH</p>
      <SaltySection>
        <FishGallery>
          <Portrait>
            <img src={SaltyBoy1} />
          </Portrait>
          <Portrait>
            <img src={SaltyBoy2} />
          </Portrait>
          <Portrait>
            <img src={SaltyBoy3} />
          </Portrait>
        </FishGallery>
      </SaltySection>
    </SaltyContainer>
  );
}