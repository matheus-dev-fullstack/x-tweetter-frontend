import styled from 'styled-components';
import { cores } from '../../styles';

export const Footer = styled.footer`
  width: 100%;
  padding: 40px;

  a {
    padding-left: 30px;
    font-size: 13px;
    padding-top: 12px;
    text-align: center;
    color: ${cores.textoCinza};
    overflow-wrap: break-word;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
