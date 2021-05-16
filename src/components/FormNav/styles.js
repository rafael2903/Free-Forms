import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-bottom: 1px solid #999;
  position: relative;

  a {
    padding: 0.3rem 0.6rem;
    font-size: 1.1rem;
    color: #333;
    border: none;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    border-radius: -5px;
    position: relative;
  }

  a:nth-child(1) {
    margin-right: 0.3rem;
  }

  a:nth-child(2) {
    margin-left: 0.3rem;
  }

  a.active {
    color: #167ef9;
  }

  a.active::before {
    content: '';
    height: 6px;
    width: 100%;
    border-top: 4px solid #167ef9;
    position: absolute;
    bottom: -3px;
    left: 0;
    border-radius: 10px;
  }

  svg {
    position: absolute;
    bottom: 10px;
    right: 20px;
    color: #278742;
    padding: 6px;
    cursor: pointer;
    width: 40px;
    height: 40px;
  }

  svg:hover {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    transition: background-color 0.2s;
  }
`;
