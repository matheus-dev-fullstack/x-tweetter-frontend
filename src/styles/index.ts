import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const cores = {
  textoClaro: '#fff',
  textoCinza: '#808080',
  corFundo: '#F5F5F5',
  bege: '#FFEBD9',
  branco: '#ffffff',
  preto: '#000000',
  azul: 'rgb(29, 155, 240);',
  verde: '#28a745',
  vermelho: '#dc3545'
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    }

    body {
      background-color:${cores.preto};
    }

    .container {
      // padding: 0 auto;
      max-width: 1024px
      // margin: auto;
    }
`;
export const MainContainer = styled.div`
  display: flex;
  max-width: 1024px;
  width: 100%;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
