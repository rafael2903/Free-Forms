import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ButtonsContainer, LogoContainer, StyledHeader, StyledP } from './styles';
import img from '../../assets/google-forms.svg';
import Button from '../Button';

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
          <Button as={Link} to="/">
            Meus Formulários
          </Button>
        )}
        {loggedIn && <Button onClick={logout}>Sair</Button>}
      </ButtonsContainer>
    </StyledHeader>
  );
}

export default Header;
