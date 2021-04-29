import styled from 'styled-components';

export const FormItem = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-top: 1rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;

  div {
    display: flex;
    align-items: center;

    svg {
      color: white;
      margin-left: 0.6rem;
      cursor: pointer;
      height: 1.9rem;
      width: 1.9rem;
      padding: 0.4rem;
      border-radius: 0.3rem;
    }

    svg:nth-child(1) {
      background-color: #4ac6d7;
    }

    svg:nth-child(2) {
      background-color: #994ad7;
    }

    svg:nth-child(3) {
      background-color: #32cb94;
    }

    svg:nth-child(4) {
      background-color: #438eff;
    }

    svg:nth-child(5) {
      background-color: #ff3737;
    }
  }
`;
