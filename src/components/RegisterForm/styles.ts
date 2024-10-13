import styled from 'styled-components';
import { cores } from '../../styles';
import { Link } from 'react-router-dom';

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
  margin-bottom: 22px;
  font-size: 32px;
  color: ${cores.textoClaro};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 6px;
  font-size: 18px;
  color: ${cores.textoClaro};
`;

export const Input = styled.input`
  height: 34px;
  width: 300px;
  margin-bottom: 10px;
  padding-left: 12px;
  border: none;
  border-radius: 8px;
  background-color: ${cores.branco};
  color: ${cores.preto};
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled(Link)`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 140px;
  font-size: 15px;
  font-weight: 400;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  background-color: ${cores.azul};
  color: ${cores.textoClaro};
  margin-right: 20px;
`;

export const CancelButton = styled(Button)`
  background-color: ${cores.preto};
  color: ${cores.textoClaro};
  font-size: 15px;
  font-weight: 400;
`;
