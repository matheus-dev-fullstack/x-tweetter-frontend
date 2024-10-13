import styled from 'styled-components';
import { cores } from '../../styles';

export const Footer = styled.div`
  width: 100%;
  height: 60px;
  padding-top: 60px;
  padding-left: 40px;
  padding-right: 40px;

  a {
    padding-left: 15px;
    padding-bottom: 12px;
    font-size: 12px;
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
