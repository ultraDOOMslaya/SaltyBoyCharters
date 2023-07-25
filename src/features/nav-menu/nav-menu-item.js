import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import styled from 'styled-components';
import * as Typography from '@features/theme/typography';
import { Link } from 'react-router-dom';
import { NavMenuContext } from '@features/top-bar/top-bar';
const ItemLink = styled(Link) `
  color: ${(props) => props.theme.menuFg};
  font-size: ${Typography.buttonTextSize};
  font-weight: 500;
  line-height: 1;
  overflow: hidden;
  padding: 1.0625rem 1rem;
  text-overflow: ellipsis;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none !important;
  display: block;
  background-color: transparent;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  :hover {
    background-color: rgba(127, 127, 127, 0.1);
  }
`;
const ItemName = styled.span ``;
const ItemTag = styled.span `
  font-size: 0.875rem !important;
  font-weight: 600 !important;
  margin-top: auto;
  ${(props) => {
    if (props.beta) {
        return 'color: #D46565;';
    }
    if (props.new) {
        return 'color: #8FBD7C;';
    }
}}
`;
export function NavMenuItem(props) {
    const [, setVisibility] = useContext(NavMenuContext);
    return (_jsxs(ItemLink, { to: props.href, onClick: () => {
            setVisibility(false);
        }, children: [_jsx(ItemName, { children: props.name }), props.isBeta ? _jsx(ItemTag, { beta: true, children: "BETA" }) : null, props.isNew ? _jsx(ItemTag, { new: true, children: "NEW" }) : null] }));
}
