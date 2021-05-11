import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';

export const StyledModal = styled(Modal)`
  div.form-link {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 1.6rem;
    border: 1px solid #999;
    border-radius: 4px;

    svg.copy-link {
      height: 2.1rem;
      width: 2.1rem;
      background-color: #ccc;

      padding: 0.5rem;
      border-radius: 0 3px 3px 0;
      cursor: pointer;

      :hover {
        color: #666;
      }
    }

    input {
      border: none;
      color: #555;
    }
  }

  form {
    display: flex;
    margin-bottom: 1.6rem;
    align-items: center;
  }

  h2 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  div.modal-body {
    padding: 1rem 1.5rem;
  }

  div.respondents {
    margin-bottom: 1.6rem;

    div {
      border: 1px solid #999;
      border-radius: 0.2rem;
      max-height: 10rem;
      overflow-y: auto;
      min-height: 2rem;
    }

    p {
      font-size: 0.9rem;
      padding: 0.4rem 0.5rem;
      border-bottom: 1px solid #999;
    }

    p:last-child {
      border-bottom: none;
    }
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 0.4rem;
  border: 1px solid #999;
  border-radius: 4px;
  font-size: 0.9rem;

  :focus {
    outline: none;
    border-color: #167ef9;
  }
`;
