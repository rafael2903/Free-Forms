import styled from 'styled-components';

export const Option = styled.label`
  display: block;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.07);
  padding: 0.6em 1rem;
  border-radius: 0.3em;
  margin-bottom: 0.7rem;

  input {
    margin-right: 0.5rem;
    border: none;
  }

  input[type='text']::placeholder {
    color: black;
    font-size: 1rem;
  }
`;
