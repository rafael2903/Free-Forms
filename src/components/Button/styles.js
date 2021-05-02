import styled, { css } from 'styled-components';

export const Button = styled.button`
  color: white;
  background-color: #167ef9;
  padding: 0.5rem 1.3rem;
  border-radius: 0.3rem;
  font-size: 0.9rem;
  cursor: pointer;
  border: none;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};

  :hover {
    box-shadow: 0 0 5px 0px rgba(22, 124, 249, 1);
  }

  :focus {
    outline: none;
  }

  ${(props) =>
    props.secondary &&
    css`
      background-color: white;
      color: #444;
      border: 2px solid rgba(0, 0, 0, 0.2);

      :hover {
        background-color: white;
        border: 2px solid #167ef9;
        box-shadow: none;
      }
    `}
`;
