import styled from 'styled-components';
import { cores } from '../../styles';

export const Content = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${cores.preto};
`;

export const ImageDiv = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 500px;
  }
`;

export const Options = styled.div`
  padding-left: 90px;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 56px;
  color: ${cores.textoClaro};
`;

export const TextSubscribe = styled.h2`
  margin-bottom: 40px;
  font-size: 36px;
  color: ${cores.textoClaro};
`;

export const LoginTitle = styled.h2`
  margin-bottom: 10px;
  padding-left: 3px;
  font-size: 16px;
  color: ${cores.textoClaro};
`;

export const Terms = styled.p`
  color: ${cores.textoCinza};
  font-size: 9px;
  margin-top: 6px;
  margin-bottom: 14px;
  padding-left: 3px;

  span {
    color: ${cores.azul};
    cursor: pointer;
  }
`;

export const Button = styled.button`
  height: 40px;
  width: 200px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 25px;
  border: none;
  cursor: pointer;
`;

export const LoginButton = styled(Button)`
  background-color: ${cores.azul};
  color: ${cores.textoClaro};
  font-size: 15px;
`;
