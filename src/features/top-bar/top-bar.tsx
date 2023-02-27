import styled from 'styled-components';
import * as Sizing from '../theme/sizing';
import * as Colors from '../theme/colors';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { BurgerButton } from './burger-button';
import { NavMenu } from '@features/nav-menu/nav-menu';


// import * as Sizing from '@features/theme/Sizing';

const StyledTopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  height: ${Sizing.topBarHeight};
  width: 100vw;
  padding: 0.25rem;
  background-color: ${Colors.darkBlue};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  text-transform: uppercase;
`;

const RightButtons = styled.div`
  margin-left: auto;
  justify-content: flex-end;
  display: flex;
`;

const TopBarLeftSection = styled.div`
  float: left;
  margin-left: 1rem;
`;

const TopBarRightSection = styled.div`
  float: right;
  margin-right: 1rem;
`;

export const NavMenuContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([
  false,
  (): boolean => false,
]);

const NavMenuProvider = (props: { children: ReactNode }) => {
  const navMenu = useState(false);
  return <NavMenuContext.Provider value={navMenu}>{props.children}</NavMenuContext.Provider>;
};

export function TopBarWithProvider() {
  const [navMenuVisibility, setNavMenuVisibility] = useContext(NavMenuContext);
  return (
    <StyledTopBar>
      <TopBarLeftSection>
        <div
          style={{color: Colors.pureWhite, fontSize: Sizing.topBarBold}}
        >
          <b>Captain Scotty Darna</b>
        </div>
        <div
          style={{color: Colors.lightGray, fontSize: Sizing.topBarInfo}}
        >
          Deep Sea & Inshore Fishing
        </div>
      </TopBarLeftSection>
      <TopBarRightSection>
        <div
          style={{color: Colors.lightGray, fontSize: Sizing.topBarInfo}}
        >
          Ready to go fishing?
        </div>
        <div
          style={{color: Colors.pureWhite, fontSize: Sizing.topBarBold}}
        >
          <ContactLink href='tel:239-872-0563'>Call/Text 239-872-0563</ContactLink>
          <br />
          <ContactLink href='mailto: saltyboycharters@gmail.com'>saltyboycharters@gmail.com</ContactLink>
        </div>
      </TopBarRightSection>
      <NavMenu visible={navMenuVisibility} closeMenu={() => setNavMenuVisibility(false)} />
    </StyledTopBar>
  );
}

export const TopBar = () => {
  return (
    <NavMenuProvider>
      <TopBarWithProvider />
    </NavMenuProvider>
  )
}

const ContactLink = styled.a`
  color: white;
  text-decoration:none;
  word-break: break-all;
`;
