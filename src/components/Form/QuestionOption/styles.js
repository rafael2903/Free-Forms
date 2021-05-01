import styled from 'styled-components';

export const Option = styled.label`
  display: block;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.07);
  padding: 0.6em 2.5rem 0.6rem 1rem;
  border-radius: 0.3em;
  margin-bottom: 0.7rem;
  position: relative;
  display: flex;
  align-items: center;

  input {
    margin-right: 0.5rem;
    border: none;
  }

  input[type='text'],
  input[type='text']::placeholder {
    color: black;
    font-size: 1rem;
    background-color: transparent;
    flex-grow: 1;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid transparent;

    :focus {
      outline: none;
      border-bottom-color: black;
    }
  }

  svg {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    display: none;
    width: 1.5rem;
    height: 1.5rem;
    color: #777;
  }

  :hover {
    svg {
      display: inline-block;
      cursor: pointer;
    }
  }
`;
