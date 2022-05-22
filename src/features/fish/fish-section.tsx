import React from 'react'
import styled from 'styled-components';
import * as Colors from '@features/theme/colors';
import { SaltyContainer, SaltySection } from '@features/shared/page-section';
import SaltyBoy1 from '@assets/images/scotty-with-fish.jpg';
import SaltyBoy2 from '@assets/images/guy-with-fish1.jpg';
import SaltyBoy3 from '@assets/images/lyla-with-fish.jpg';
import SaltyBoy4 from '@assets/images/guy-with-fish2.jpg';


const FishCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  margin-right: 2rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
  padding: 1rem;

  background-color: ${Colors.lightTurqoise};
  box-shadow: 2px 1px 1px black;
  border-radius: 5px;

  img {
    width: 25%;
  }
`;

export const FishSection = () => {
  
  return (
    <SaltyContainer>
      <p>THE FISH</p>
      <SaltySection>
        <FishCard>
          <img src={SaltyBoy1} />
          <img src={SaltyBoy2} />
          <img src={SaltyBoy3} />
          <img src={SaltyBoy4} />
        </FishCard>
      </SaltySection>
    </SaltyContainer>
  );
}