import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  padding: 0;
  z-index: 10;

  span {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0.75rem;
    width: 1.75rem;
    height: 1.75rem;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  div {
    height: 0.25rem;
    background: ${({ theme, menuOpen }) => menuOpen ? theme.primaryLight : theme.primary};
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
