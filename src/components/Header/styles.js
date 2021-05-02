import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 4.3rem;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.4);
  display: flex;
  padding: 0.5rem 2.3rem;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const StyledP = styled.p`
  font-size: 2.1rem;
  font-weight: bold;
  color: #555;
  margin-left: 0.5rem;
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;
