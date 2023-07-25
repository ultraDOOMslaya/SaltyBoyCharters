import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
import burgerIcon from '@assets/icons/burger.svg';
export const StyledBurgerButton = styled.button `
  border-radius: 50%;
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0.0);
  border: rgba(255, 255, 255, 0.0);

  img {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    outline: none;
  }
`;
export const BurgerButton = (props) => {
    return (_jsx(StyledBurgerButton, { onClick: () => props.onClick(), children: _jsx("img", { src: burgerIcon, alt: "menu" }) }));
};
