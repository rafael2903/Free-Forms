import styled from 'styled-components';
import img from '../../../assets/background-image.jpg';

export const StyledMain = styled.main`
  height: auto;
  position: relative;
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    filter: blur(5px);
    transform: scale(1.2);
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${img}');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: top;
    background-size: cover;
`;
