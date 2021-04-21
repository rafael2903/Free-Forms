import styled from 'styled-components';
import img from '../../assets/background-image.jpg';

export const StyledMain = styled.main`
  height: auto;
  position: relative;
  flex-grow: 1;
  overflow: hidden;

  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(5px);
    transform: scale(1.2);
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${img}');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: top;
    background-size: cover;
`;
