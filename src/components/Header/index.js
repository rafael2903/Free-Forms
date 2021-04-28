import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ButtonsContainer, LogoContainer, StyledHeader, StyledP } from './styles';
import img from '../../assets/google-forms.svg';
import HeaderButton from '../HeaderButton';

function Header({ loggedIn, setLoggedIn }) {
  const { pathname } = useLocation();

  function logout() {
    localStorage.clear();
    setLoggedIn(false);
  }

  return (
    <StyledHeader>
      <LogoContainer>
        <img src={img} alt="Free Form logo" />
        <StyledP>Free Forms</StyledP>
      </LogoContainer>
      <ButtonsContainer>
        {loggedIn && pathname !== '/' && (
          <HeaderButton as={Link} to="/">
            Meus Formulários
          </HeaderButton>
        )}
        {loggedIn && <HeaderButton onClick={logout}>Sair</HeaderButton>}
      </ButtonsContainer>
    </StyledHeader>
  );
}

export default Header;
