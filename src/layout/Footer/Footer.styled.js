import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 2rem;
  padding: ${({ theme }) => theme.paddingDesktop};

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: ${({ theme }) => theme.paddingMobile};

    div {
      flex-direction: column;
    }
  }

  div > div {
    display: flex;
    flex-direction: row;
    align-self: center;
  }

  div > div > a {
    margin-right: 1rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
  }

  ul > li {
    padding: 0 1rem
  }
`;