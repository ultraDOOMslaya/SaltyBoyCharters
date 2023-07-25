import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import * as Sizing from '../theme/sizing';
import * as Colors from '../theme/colors';
import { createContext, useContext, useState } from 'react';
import { NavMenu } from '@features/nav-menu/nav-menu';
// import * as Sizing from '@features/theme/Sizing';
const StyledTopBar = styled.div `
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  
  height: ${Sizing.topBarHeight};
  width: 100vw;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  background-color: ${Colors.darkBlue};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  text-transform: uppercase;
`;
const RightButtons = styled.div `
  margin-left: auto;
  justify-content: flex-end;
  display: flex;
`;
const TopBarLeftSection = styled.div `
  float: left;
`;
const TopBarRightSection = styled.div `
  float: right;
`;
export const NavMenuContext = createContext([
    false,
    () => false,
]);
const NavMenuProvider = (props) => {
    const navMenu = useState(false);
    return _jsx(NavMenuContext.Provider, { value: navMenu, children: props.children });
};
export function TopBarWithProvider() {
    const [navMenuVisibility, setNavMenuVisibility] = useContext(NavMenuContext);
    return (_jsxs(StyledTopBar, { children: [_jsxs(TopBarLeftSection, { children: [_jsx("div", { style: { color: Colors.pureWhite, fontSize: Sizing.topBarBold }, children: _jsx("b", { children: "Captain Scotty Darna" }) }), _jsx("div", { style: { color: Colors.lightGray, fontSize: Sizing.topBarInfo }, children: "Deep Sea & Inshore Fishing" })] }), _jsxs(TopBarRightSection, { children: [_jsx("div", { style: { color: Colors.lightGray, fontSize: Sizing.topBarInfo }, children: "Ready to go fishing?" }), _jsxs("div", { style: { color: Colors.pureWhite, fontSize: Sizing.topBarBold }, children: [_jsx(ContactLink, { href: 'tel:239-872-0563', children: "Call/Text 239-872-0563" }), _jsx("br", {}), _jsx(ContactLink, { href: 'mailto: saltyboycharters@gmail.com', children: "saltyboycharters@gmail.com" })] })] }), _jsx(NavMenu, { visible: navMenuVisibility, closeMenu: () => setNavMenuVisibility(false) })] }));
}
export const TopBar = () => {
    return (_jsx(NavMenuProvider, { children: _jsx(TopBarWithProvider, {}) }));
};
const ContactLink = styled.a `
  color: white;
  text-decoration:none;
  word-break: break-all;
`;
