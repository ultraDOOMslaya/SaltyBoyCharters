import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styled from 'styled-components';
import { NavMenuItem } from './nav-menu-item';
import { NavMenuDivider } from './nav-menu-divider';
import { Link } from 'react-router-dom';
const StyledMenu = styled.div `
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1501;
  height: 100%;
  width: 100%;
  max-width: 275px;
  background-color: ${(props) => props.theme.menuBg};
  -webkit-transition: opacity 0.5s ease, -webkit-transform 0.5s ease;
  transition: transform 0.5s ease, opacity 0.5s ease;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  overflow-y: ${(props) => (props.visible ? 'auto' : 'visible')};
  overflow-x: ${(props) => (props.visible ? 'hidden' : 'visible')};
  transform: ${(props) => props.visible
    ? 'translate(0, 0) translate3d(0, 0, 0)'
    : 'translate(-100%, 0) translate3d(-100%, 0, 0)'};
`;
const NavMenuList = styled.div `
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-bottom: 0.5rem;
  padding-left: 0;
`;
const LogoContainer = styled(Link) `
  background-color: ${(props) => props.theme.topBarBg};
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  display: block;
  margin-bottom: 0.5rem;
  padding: 1rem;
`;
const Logo = styled.img `
  align-items: center;
  color: inherit;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-size: 1.25rem;
  font-weight: 500;
  height: 1.25rem;
  letter-spacing: 0.02em;
  line-height: 1.4;
  position: relative;
  white-space: nowrap;
  padding-right: 0 !important;
  padding-left: 0 !important;
  border-style: none;
  vertical-align: middle;
`;
const NavMenuOverlay = styled.div `
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1500;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.54);
  transition: opacity 0.5s ease, visibility 0.5s ease;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;
export function NavMenu(props) {
    const closeMenu = () => {
        if (props.closeMenu) {
            props.closeMenu();
        }
    };
    return (_jsxs(_Fragment, { children: [_jsxs(StyledMenu, { visible: props.visible, children: [_jsx(LogoContainer, { to: "/", children: _jsx(Logo, {}) }), _jsx(NavMenuList, { children: _jsx(NavMenuItem, { name: "home", href: "/" }) }), _jsxs(NavMenuList, { children: [_jsx(NavMenuDivider, { name: "stuff" }), _jsx(NavMenuItem, { name: "pics", href: "/data-manager" }), _jsx(NavMenuItem, { name: "calendar", href: "/widgets" })] })] }), _jsx(NavMenuOverlay, { visible: props.visible, onClick: () => closeMenu() })] }));
}
