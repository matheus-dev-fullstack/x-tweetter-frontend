import styled from 'styled-components';
import { cores } from '../../styles';

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 598px;
  display: flex;
  margin-left: 264px;
  flex-direction: column;
  border: 1.5px solid rgba(031, 033, 034, 0.6);
  overflow-y: hidden;
  scroll-behavior: smooth;
  // overflow-y: scroll;
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
  width: 100%;
  height: 190px;
  display: flex;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  #bannerLabel {
    :hover {
      #overlay {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2;
        color: ${cores.branco};
        font-weight: bold;
        transition: background-color 0.8s ease;
        background-color: rgba(0, 0, 0, 0.6);
        cursor: pointer;
      }
    }
  }

  #photoLabel {
    :hover {
      #overlay {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        z-index: 2;
        color: ${cores.branco};
        font-weight: bold;
        background-color: rgba(0, 0, 0, 0.6);
        transition: background-color 0.8s ease;
        cursor: pointer;
      }
    }
  }

  #overlay {
    display: none;
    transition: background-color 0.8s ease;
  }

  #banner {
    display: none;
  }
`;

export const PerfilPhoto = styled.div`
  height: 130px;
  width: 130px;
  border-radius: 50%;
  position: absolute;
  bottom: -65px;
  left: 16px;
  z-index: 3;

  img {
    width: 130px;
    height: 130px;
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
