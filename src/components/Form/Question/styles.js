import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 1.5rem;
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.4rem;
  margin-bottom: 2rem;
  position: relative;

  button {
    padding: 0.2rem 0.6rem 0.2rem 0.1rem;
    margin: 0;
  }

  & > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: none;
    width: 1.6rem;
    height: 1.6rem;
    color: #777;
  }

  :hover {
    & > svg {
      display: inline-block;
      cursor: pointer;
    }
  }
`;

export const AddOption = styled.div`
  display: flex;
  height: 2.3rem;
  margin-top: 1.5rem;
  align-items: center;
`;
