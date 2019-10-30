import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(17, 17, 17, 0.8);
  z-index: 10;
  transition: all 0.4s ease;
  opacity: ${({ menuOpen }) => menuOpen ? 1 : 0};
  visibility: ${({ menuOpen }) => menuOpen ? 'visible' : 'hidden'};
`;
