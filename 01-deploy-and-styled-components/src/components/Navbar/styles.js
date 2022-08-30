import styled from 'styled-components';

const smallScreen = `@media (max-width: 600px)`;

export const Title = styled.h1`
  font-size: 2rem;
  color: red;

  ${smallScreen} {
    color: white;
  }
`;

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #18181f;
  padding: 0.8rem;
`;

export const CustomDiv = styled.div`
  flex-direction: column;
`;

export const SearchInput = styled.input.attrs({
  name: 'search-input',
  type: 'text',
  id: 'navbar-search-input',
})``;