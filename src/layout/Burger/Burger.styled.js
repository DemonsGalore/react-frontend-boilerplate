import styled from 'styled-components';

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 1rem;
  width: 1.75rem;
  height: 1.75rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    height: 0.25rem;
    background: ${({ theme, menuOpen }) => menuOpen ? theme.primaryLight : theme.primaryDark};
    border-radius: 0.5rem;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ menuOpen }) => menuOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ menuOpen }) => menuOpen ? '0' : '1'};
      transform: ${({ menuOpen }) => menuOpen ? 'translateX(2rem)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ menuOpen }) => menuOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
