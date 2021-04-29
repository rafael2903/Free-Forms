import styled, { css } from 'styled-components';

export const StatusMessage = styled.p`
  text-align: center;
  color: ${(props) => (props.error ? 'red' : '#444')};
  border-radius: 100%;
  position: relative;
  min-height: 1.2rem;
  width: 100%;

  ${(props) =>
    props.loading &&
    css`
      &:before,
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        border: 4px solid transparent;
        border-top-color: #167ef9;
      }

      &:before {
        z-index: 100;
        animation: spin 1s infinite;
      }

      &:after {
        border: 4px solid #ccc;
      }

      @keyframes spin {
        0% {
          -webkit-transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          transform: translateX(-50%) rotate(0deg);
        }

        100% {
          -webkit-transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          transform: translateX(-50%) rotate(360deg);
        }
      }
    `}
`;
