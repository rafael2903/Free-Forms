import React from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonsContainer, LogoContainer, StyledHeader, StyledP } from './styles';
import img from '../../assets/google-forms.svg';
import { isAdministrator } from '../../services/auth';

function Header({ loggedIn, setLoggedIn }) {
  function logout() {
    localStorage.clear();
    setLoggedIn(false);
  }

  const isAdmin = isAdministrator();

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
              {isAdmin && (
                <>
                  <li>
                    <NavLink exact to="/users">
                      Gerenciar usuários
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/forms">
                      Gerenciar formulários
                    </NavLink>
                  </li>
                </>
              )}
              <li>
                <NavLink exact to="/">
                  Meus formulários
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
