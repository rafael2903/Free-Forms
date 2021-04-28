import React from 'react';
import { useLocation } from 'react-router-dom';
import { ButtonsContainer, LogoContainer, StyledHeader, StyledP } from './styles';
import img from '../../assets/google-forms.svg';
import HeaderButton from '../HeaderButton';

function Header({ setLoggedIn }) {
  const { pathname } = useLocation();

  function logout() {
    localStorage.clear();
    setLoggedIn(false);
  }

  return (
    <StyledHeader>
      <LogoContainer>
        <img src={img} alt="form-logo" />
        <StyledP>Free Forms</StyledP>
      </LogoContainer>
      <ButtonsContainer>
        {pathname === '/verforms' && <HeaderButton onClick={logout}>Sair</HeaderButton>}
      </ButtonsContainer>
    </StyledHeader>
  );
}

export default Header;
