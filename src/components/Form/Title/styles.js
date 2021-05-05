import styled, { css } from 'styled-components';

export const Title = styled.input`
  width: 100%;
  font-size: 2rem;
  height: auto;
  border: none;
  border-bottom: 1px solid #333;
  padding: 0.5rem 1rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2.5rem;

  :focus {
    outline: none;
    border-bottom-color: #167ef9;
  }

  ${(props) =>
    props.size === 'sm' &&
    css`
      font-size: 1.1rem;
      font-weight: normal;
      margin-bottom: 1.5rem;
    `}
`;
