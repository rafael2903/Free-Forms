import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 1.5rem;
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.4rem;
  margin-bottom: 2rem;

  button {
    padding: 0.2rem 0.6rem 0.2rem 0.1rem;
    margin: 0;
    /* margin-top: 1.5rem; */
  }
`;

export const AddOption = styled.div`
  display: flex;
  height: 2.3rem;
  margin-top: 1.5rem;
  align-items: center;

  input {
    flex-grow: 1;
    margin-left: 1.3rem;
    border: 2px solid rgba(0, 0, 0, 0.3);
    border-radius: 0.3rem;
    padding: 0.5rem;
    font-size: 0.9rem;

    :focus {
      outline: none;
      border-color: #167ef9;
    }
  }
`;
