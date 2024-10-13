import styled from 'styled-components';
import { cores } from '../../styles';

export const Footer = styled.div`
  width: 100%;
  height: 10vh;
  padding: 40px;

  a {
    padding-left: 15px;
    padding-bottom: 12px;
    font-size: 13px;
    text-align: center;
    color: ${cores.textoCinza};
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
