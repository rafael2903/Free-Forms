import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-top: 1.5rem;

  input {
    width: 100%;
    padding: 0.7rem 0.5rem 0.7rem 3rem;
    border: none;
    border-radius: 0.5rem;
    background-color: rgba(0, 0, 0, 0.07);

    :focus {
      outline: none;
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);
    }
  }

  svg {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    color: gray;
    height: 1.2rem;
    width: 1.2rem;
  }
`;
