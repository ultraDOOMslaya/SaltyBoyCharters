import styled from 'styled-components';
import { buttonFont, buttonTextSize, buttonTextTransform } from '@features/theme/typography';
import * as Color from '@features/theme/colors';

export const Button = styled.button`
  padding: 0.875rem;
  font-size: ${buttonTextSize};
  font-family: ${buttonFont};
  font-weight: 500;
  text-transform: ${buttonTextTransform};
  /** We need the transparent border so the component doesn't resize when active */
  border: 2px solid transparent;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.buttonFg};
  background: radial-gradient(
    circle at top left,
    ${(props) => props.theme.buttonBg1} 0,
    ${(props) => props.theme.buttonBg2} 100%
  );
  /** needed to make the transparent border play nice with bg gradient */
  background-origin: border-box;
  outline: 0;
  &:hover {
    background: radial-gradient(
      circle at top left,
      ${(props) => props.theme.buttonHoverBg1} 0,
      ${(props) => props.theme.buttonHoverBg2} 100%
    );
    background-origin: border-box;
  }
  &:active {
    background: black;
    border: 2px solid ${(props) => props.theme.buttonActiveBorder};
  }
  &:disabled {
    background: black;
    color: ${(props) => props.theme.buttonDisabledFg};
    border: 2px solid ${(props) => props.theme.buttonDisabledBorder};
    cursor: not-allowed;
  }
  &:focus {
    outline: 0;
  }
`;