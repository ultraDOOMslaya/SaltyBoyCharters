import styled from "styled-components";
import burgerIcon from '@assets/icons/burger.svg';


export interface BurgerButtonProps {
  onClick: () => void;
}

export const StyledBurgerButton = styled.button`
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

export const BurgerButton = (props: BurgerButtonProps) => {
  return (
    <StyledBurgerButton onClick={() => props.onClick()}>
      <img src={burgerIcon} alt="menu" />
    </StyledBurgerButton>
  );
}