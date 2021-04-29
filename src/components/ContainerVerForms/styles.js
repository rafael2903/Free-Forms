import styled from 'styled-components';
import Main from '../Main';

export const ContainerVerForms = styled(Main)`
  height: auto;
  padding: 1.5rem;

  .ButtonsContainer {
    display: flex;
    height: 35px;
  }

  .ContainerForms {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 4rem;
    border-bottom: 1px solid gray;
  }
`;
