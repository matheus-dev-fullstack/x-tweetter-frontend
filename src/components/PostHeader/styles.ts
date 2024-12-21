import styled from 'styled-components';
import { cores } from '../../styles';

export const Header = styled.div`
  width: 100%;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(031, 033, 034, 0.6);
  background-color: transparent;
  // background-color: red;
`;
export const Button = styled.button`
  height: 100%;
  width: 50%;
  font-size: 14px;
  font-weight: 700;
  color: ${cores.branco};
  background-color: rgba(50, 50, 50, 0.05);
  backdrop-filter: blur(2px);
  // background-color: transparent;

  border: none;
  transition: background-color 0.4s ease;

  :hover {
    background-color: ${cores.cinzaSecundario};
    // background-color: rgba(0, 0, 0, 0.1);
    // transition: background-color 0.5s ease;
  }
`;
