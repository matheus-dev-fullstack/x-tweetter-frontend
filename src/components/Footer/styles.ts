import styled from 'styled-components';
import { cores } from '../../styles';

export const Footer = styled.footer`
  background-color: ${cores.bege};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;

  p {
    width: 480px;
    font-size: 10px;
    text-align: center;
    color: ${cores.corTexto};
  }
`;
export const Social = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 36px;
  margin-bottom: 80px;
`;
