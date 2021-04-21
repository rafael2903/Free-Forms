import { LogoContainer, StyledHeader, StyledP } from './style';
import img from '../../assets/google-forms.svg';

function Header() {
  return (
    <StyledHeader>
      <LogoContainer>
        <img src={img} alt="form-logo" />
      </LogoContainer>
      <StyledP>Free Forms</StyledP>
    </StyledHeader>
  );
}

export default Header;
