import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 1.5rem;
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.4rem;
  margin-bottom: 2rem;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  svg {
    margin: 0 20px;
    cursor: pointer;
  }
`;

//     :hover {
//       background-color: rgba(0, 0, 0, 0.07);
//       border-radius: 50%;
//     }
//   }

//   :hover {
//     & > svg {
//       display: inline-block;
//       cursor: pointer;
//     }
//   }
// `;
