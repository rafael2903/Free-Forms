import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => (props.error ? '#f44336' : '#4CAF50')};
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 0.3rem;
  font-weight: bold;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%),
    0px 1px 18px 0px rgb(0 0 0 / 12%);

  svg {
    width: 1.1rem;
    height: 1.1rem;
    margin-right: 0.5rem;
  }

  svg.error-circle {
    width: 1.4rem;
    height: 1.4rem;
  }
`;
