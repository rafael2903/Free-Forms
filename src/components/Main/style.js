import styled from 'styled-components';
import img from '../../assets/background-image.jpg';

export const StyledMain = styled.main`
  height: 100vh;
  /* background-color: rgba(0, 0, 0, 0.5); */
  background: linear-gradient(black, white) url('${img}');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
  background-size: cover;
`;
