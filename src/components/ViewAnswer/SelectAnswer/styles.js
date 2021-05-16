import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.8rem 1.5rem;
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.4rem;
  margin-bottom: 2rem;
  margin-top: 1rem;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    width: 33%;
    justify-content: center;
  }

  p {
    /* width: 4rem; */
    text-align: center;
    width: 30%;
  }

  div p::selection {
    background-color: transparent;
  }

  svg {
    cursor: pointer;
    width: 35px;
    height: 35px;
    color: #666;
    padding: 5px;
  }

  svg:hover {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    transition: background-color 0.2s;
  }
`;
