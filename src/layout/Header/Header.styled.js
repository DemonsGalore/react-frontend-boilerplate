import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  margin-top: ${({ isMobile }) => isMobile ? '52px' : '0'};
`;
