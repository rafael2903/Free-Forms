import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
`;

export const Tab = styled.button`
  width: 50%;
  height: 100%;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  background: none;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      color: white;
      background-color: #167ef9;
    `};
`;
