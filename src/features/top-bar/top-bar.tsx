import styled from 'styled-components';
import * as Sizing from '../theme/sizing';
import * as Colors from '../theme/colors';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { BurgerButton } from './burger-button';
import { NavMenu } from '@features/nav-menu/nav-menu';


// import * as Sizing from '@features/theme/Sizing';

const StyledTopBar = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  height: ${Sizing.topBarHeight};
  width: 100vw;
  padding: 0.25rem;
  background-color: ${Colors.hazyBlack};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
`;

const RightButtons = styled.div`
  margin-left: auto;
  justify-content: flex-end;
  display: flex;
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
      <BurgerButton
        onClick={() => {
          setNavMenuVisibility(!navMenuVisibility);
        }}
      />
      
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