import React from 'react'
import styled from 'styled-components';
import Facebook from '@assets/images/facebook.png';
import Instagram from '@assets/images/instagram.png'

export const SocialMedia = () => {
  
    return (
      <SocialMediaContainer>
        <a href="https://www.facebook.com/SaltyboyCharters/"><img src={Facebook} /></a>
        <a href="https://www.instagram.com/captscottydarna/?hl=en"><img src={Instagram} /></a>
      </ SocialMediaContainer>
    );
  }

const SocialMediaContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: row;
  gap: 0.25rem;

  margin-top: 5.5rem;
  margin-right: 0.5rem;
  z-index: 3000;

  img {
    width: 2rem;
  }
`;