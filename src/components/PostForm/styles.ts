import styled from 'styled-components';
import { cores } from '../../styles';
import { Link } from 'react-router-dom';

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  // background-color: ${cores.azul};
  padding: 14px 14px 10px 14px;
`;

export const ProfileImage = styled.img`
  height: 42px;
  border-radius: 21px;
  margin-right: 8px;

  :hover {
    cursor: pointer;
  }
`;

export const Form = styled.form`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.textarea`
  height: 40px;
  resize: none;
  overflow: hidden;
  margin-bottom: 10px;
  padding: 8px;
  border: none;
  background-color: transparent;

  color: ${cores.textoClaro};
  font-size: 20px;

  :focus {
    border: none;
    outline: none;
  }
`;

export const Options = styled.div`
  // width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  // padding: 10px 4px 0px 4px;
  // border-top: 1px solid ${cores.cinzaSecundario};
  // background-color: ${cores.branco};
`;

export const Attachments = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  flex-direction: row;
`;
export const InputFile = styled.div`
  display: flex;
  // margin-left: 6px;

  input[type='file'] {
    display: none;
  }

  label {
    cursor: pointer;
    // background-color: ${cores.azul};
    color: ${cores.azul};
    padding: 6px 13px;
    border-radius: 20px;
    font-size: 15px;
    // font-weight: 400;

    :hover {
      background-color: ${cores.azul};
      color: ${cores.branco};
    }

    i {
      font-size: 18px;
    }
  }
`;

export const ButtonSubmit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 18px 6.5px 19px;
  font-size: 15px;
  font-weight: 400;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background-color: ${cores.azul};
  color: ${cores.textoClaro};
`;
