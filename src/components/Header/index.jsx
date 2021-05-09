import React from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonsContainer, LogoContainer, StyledHeader, StyledP } from './styles';
import img from '../../assets/google-forms.svg';
// import Button from '../Button';

function Header({ loggedIn, setLoggedIn }) {
  // const { pathname } = useLocation();

  function logout() {
    localStorage.clear();
    setLoggedIn(false);
  }

  return (
    <StyledHeader>
      <LogoContainer to="/">
        <img src={img} alt="Free Form logo" />
        <StyledP>Free Forms</StyledP>
      </LogoContainer>
      <ButtonsContainer>
        {loggedIn && (
          <nav>
            <ul>
              <li>
                <NavLink exact to="/">
                  Meus Formulários
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/assigned">
                  Compartilhados comigo
                </NavLink>
              </li>
              <li>
                <button type="button" onClick={logout}>
                  Sair
                </button>
              </li>
            </ul>
          </nav>
        )}
      </ButtonsContainer>
    </StyledHeader>
  );
}

export default Header;
