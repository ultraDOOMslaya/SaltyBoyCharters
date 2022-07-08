import React from 'react'
import * as Colors from '@features/theme/colors';
import * as Sizing from '@features/theme/sizing';
import { Button } from '@features/shared/button/button';
import styled from 'styled-components';
import InshoreBoatImage from '@assets/images/inshore-boat.jpeg';
import OffshoreBoatImage from '@assets/images/offshore-boat.jpeg'

const BoatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: -webkit-fill-available;
  margin-top: 2rem;

  background-color: ${Colors.slateBlue};
`;

const BoatsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;

  width: -webkit-fill-available;
`;

const BoatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 25rem;
  padding-right: 1.0rem;
  padding-left: 1.0rem;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
`;

const BoatCardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;

const BoatCardDescription = styled.div`
  color: ${Colors.whiteSmoke};
  font-size: 16px;

  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const BoatCardDescriptionSpecs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;

const Spec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-size: 16px;
`;

const SpecLabel = styled.div`
  font-size: 16px;
  color: ${Colors.whiteSmoke};
`;

const SpecValue = styled.div`
  font-size: 16px;
  color: ${Colors.lightGray};
`;

export const BoatSection = () => {
  return (
    <BoatsContainer>
      <p>THE BOATS</p>
      <BoatsSection>
        <BoatCard>
          <b>DEEP SEA</b>
          <BoatCardImage src={OffshoreBoatImage} />
          <BoatCardDescription>
            This is a grand boat that will take you out the bay to get the big fish!
            I hear the waves are choppy and there's a poop bucket!
          </BoatCardDescription>
          <BoatCardDescriptionSpecs>
            <Spec>
              <div style={{color: Colors.whiteSmoke}}>Length</div>
              <div style={{color: Colors.lightGray}}>36ft</div>
            </Spec>
            <Spec>
              <div style={{color: Colors.whiteSmoke}}>Capacity</div>
              <div style={{color: Colors.lightGray}}>10 persons</div>
            </Spec>
          </BoatCardDescriptionSpecs>
        </BoatCard>
        <BoatCard>
          <b>INSHORE</b>
          <BoatCardImage src={InshoreBoatImage} />
          <BoatCardDescription>
            Custom (bay boat) originally built in 2008, and restored in 2016. 
            Powered by a 200HP Yamaha engine.
          </BoatCardDescription>
          <BoatCardDescriptionSpecs>
            <Spec>
              <div style={{color: Colors.whiteSmoke}}>Length</div>
              <div style={{color: Colors.lightGray}}>24ft</div>
            </Spec>
            <Spec>
              <div style={{color: Colors.whiteSmoke}}>Capacity</div>
              <div style={{color: Colors.lightGray}}>5 persons</div>
            </Spec>
          </BoatCardDescriptionSpecs>
        </BoatCard>
      </BoatsSection>
    </BoatsContainer>
  );
}