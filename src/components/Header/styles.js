import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 4.3rem;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.4);
  display: flex;
  padding: 0 2.3rem;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  text-decoration: none;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  height: 100%;

  nav {
    height: 100%;
  }

  ul {
    display: flex;
    height: 100%;
  }

  li {
    list-style: none;
    height: 100%;
    display: flex;
    align-items: center;
  }

  a,
  button {
    padding: 0 0.7rem;
    text-decoration: none;
    color: #555;
    font-weight: bold;
    height: 100%;
    display: flex;
    align-items: center;
    border-bottom: 3px solid transparent;

    :hover {
      color: #888;
    }
  }

  a.active {
    border-bottom: 3px solid #167ef9;
    color: #167ef9;
  }

  button {
    background: none;
    border: none;
    color: #167ef9;

    :hover {
      color: rgba(22, 124, 249, 0.7);
    }
  }
`;

export const StyledP = styled.p`
  font-size: 2.1rem;
  font-weight: bold;
  color: #555;
  margin-left: 0.5rem;
`;
