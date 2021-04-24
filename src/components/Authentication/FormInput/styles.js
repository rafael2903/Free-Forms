import styled from 'styled-components';

export const FormInput = styled.input`
  background-color: #f5f5f5;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 0.3rem;
  height: 2.1rem;
  margin-top: 0.3rem;
  padding: 0.5rem;

  :focus {
    outline: none;
    border-color: #167ef9;
    box-shadow: 0 0 1px 0 #167ef9;
  }
`;
