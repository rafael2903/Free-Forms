import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;

  a {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    color: white;
    background-color: #167ef9;
    border: none;
    cursor: pointer;
    text-decoration: none;
  }

  a#questions {
    border-bottom-right-radius: 0.5rem;
  }

  a#answers {
    border-bottom-left-radius: 0.5rem;
  }

  a.active {
    color: #333;
    background: none;
  }
`;
