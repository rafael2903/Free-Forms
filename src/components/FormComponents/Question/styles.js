import styled from 'styled-components';

export const QuestionStyles = styled.div`
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
    width: 1.9rem;
    height: 1.9rem;
    color: #777;
    padding: 0.3rem;

    :hover {
      background-color: rgba(0, 0, 0, 0.07);
      border-radius: 50%;
    }
  }

  :hover {
    & > svg {
      display: inline-block;
      cursor: pointer;
    }
  }
`;
