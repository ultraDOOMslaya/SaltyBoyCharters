import React from 'react'
import styled from 'styled-components';
import * as Colors from '@features/theme/colors';
import { SaltyContainer, SaltySection } from '@features/shared/page-section';
import SaltyBoy1 from '@assets/images/scotty-happy-man-grand-snook.jpeg';
import SaltyBoy2 from '@assets/images/scotty-kids-snook.jpeg';
import SaltyBoy3 from '@assets/images/sitting-man-with-grouper.jpeg';


const FishCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  margin-right: 2rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
  padding: 1rem;

  background-color: ${Colors.slateBlue};
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
        </FishCard>
      </SaltySection>
    </SaltyContainer>
  );
}