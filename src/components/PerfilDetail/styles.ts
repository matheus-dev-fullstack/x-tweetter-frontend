import styled from 'styled-components';
import { cores } from '../../styles';

export const Container = styled.header`
  position: relative;
  height: 100vh;
  width: 598px;
  display: flex;
  flex-direction: column;
  border: 1.5px solid rgba(031, 033, 034, 0.6);
  overflow-y: hidden;
  scroll-behavior: smooth;
`;

export const Header = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  flex-direction: row;
  align-items: center;
  // background-color: blue;

  h4 {
    margin: 0;
    margin-bottom: 1px;
    color: ${cores.branco};
  }
  button {
    height: 40px;
    width: 40px;
    margin-left: 8px;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    color: ${cores.textoClaro};
    padding: 1px 8px 0px 8px;
    // padding: 8px;

    :hover {
      background-color: rgba(131, 133, 134, 0.2);
    }

    i {
      font-size: 30px;
    }
  }
`;

export const Banner = styled.div`
  background-color: blue;
  width: 100%;
  height: 190px;
  display: flex;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PerfilPhoto = styled.div`
  height: 130px;
  width: 130px;
  border-radius: 50%;
  position: absolute;
  bottom: -65px;
  left: 16px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid black;

    object-fit: cover;
  }
`;
export const Details = styled.div`
  width: 100%;
  // height: 250px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 12px;
  // background-color: red;

  h4 {
    margin-top: 82px;
    color: ${cores.textoClaro};
    margin-bottom: 0;
  }
`;
export const Username = styled.span`
  font-size: 15px;
  margin-bottom: 12px;
  color: ${cores.textoCinza};
`;

export const Followers = styled.div`
  display: flex;
  flex-direction: row;
  color: ${cores.textoCinza};
  gap: 8px;

  b {
    color: ${cores.branco};
  }
`;
