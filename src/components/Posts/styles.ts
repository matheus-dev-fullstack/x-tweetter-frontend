import styled from 'styled-components';
import { cores } from '../../styles';
import { SecondaryButton } from '../LoginOptions/styles';

export const Container = styled.header`
  width: 640px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  background-color: ${cores.azul};
`;

export const Header = styled.div`
  width: 640px;
  height: 54px;

  display: flex;
  align-items: center;
  justify-content: center;
  // border: 1px solid rgba(231, 233, 234, 0.6);
`;
export const Button = styled.button`
  height: 100%;
  width: 50%;
  font-size: 14px;
  font-weight: 700;
  color: ${cores.branco};
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);

  border: none;
  transition: background-color 0.4s ease;

  :hover {
    background-color: rgba(0, 0, 0, 0.16);
    // transition: background-color 0.5s ease;
  }
`;
