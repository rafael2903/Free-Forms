import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  &.actions {
    margin-top: 1.5rem;
    justify-content: flex-end;
  }

  &.select-type {
    margin-bottom: 1.5rem;
    select,
    button {
      width: 48%;
      text-align: center;
      text-align-last: center;
    }
  }
`;
