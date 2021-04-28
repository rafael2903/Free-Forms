import styled from 'styled-components';

export const ContainerVerForms = styled.div`
  width: 60rem;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
  background: white;
  border-radius: 5px;
  display: flex;
  margin: auto;
  padding: 1.5rem;
  flex-direction: column;
  .ButtonsContainer {
    display: flex;
    height: 35px;
    margin-top: 1.5rem;
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 4.5rem;
    border-bottom: 1px solid black;
  }
`;
