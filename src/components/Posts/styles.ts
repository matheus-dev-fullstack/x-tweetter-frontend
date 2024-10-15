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
`;

export const Header = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(031, 033, 034, 0.6);
`;
export const Button = styled.button`
  height: 100%;
  width: 50%;
  font-size: 14px;
  font-weight: 700;
  color: ${cores.branco};
  background-color: rgba(0, 0, 0, 0.3);
  // backdrop-filter: blur(2px);

  border: none;
  transition: background-color 0.4s ease;

  :hover {
    background-color: ${cores.cinzaSecundario};
    // background-color: rgba(0, 0, 0, 0.1);
    // transition: background-color 0.5s ease;
  }
`;

export const PostList = styled.div`
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Post = styled.div`
  width: 100%;
  min-height: 380px;
  max-height: 480px;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 8px;
  background-color: transparent};
  transition: background-color 0.2s ease;
  border: 1px solid rgba(131, 133, 134, 0.2);

  :hover {
    background-color: ${cores.cinzaSecundario};
    transition: background-color 0.2s ease;
  }


`;

export const ProfileButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  // background-color: ${cores.cinzaSecundario};
`;
export const More = styled.i`
  margin-left: auto;
  // margin-right: 4px;
`;
export const Verified = styled.i`
  margin-left: 6px;
  margin-right: 5px;
  padding-top: 2px;
  color: ${cores.azul};
  // margin-right: 4px;
`;

export const ProfileImage = styled.img`
  height: 42px;
  border-radius: 21px;
  margin-bottom: auto;
  margin-right: 12px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  // background-color: ${cores.cinzaSecundario};
`;
export const ProfileName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p,
  span {
    line-height: 14px;
    padding: 0;
    margin: 0;
  }

  p {
    font-size: 15px;
    font-weight: 500;
    color: ${cores.textoClaro};
  }

  span {
    font-size: 15px;
    color: ${cores.textoCinza};
  }
`;
export const TweetText = styled.p`
  display: flex;
  text-align: start;
  font-size: 15px;
  font-weight: 400;

  line-height: 19px;
  color: rgba(240, 240, 240, 1);
`;
export const ImageDiv = styled.div`
  // height: 274px;
  width: 100%;
  border-radius: 14px;
  background-color: ${cores.textoCinza};
  border: 1px solid rgba(131, 133, 134, 0.6);

  img {
    // height: 100%;
    width: 100%;
    border-radius: 14px;

    object-fit: cover;
  }
`;

export const Actions = styled.div`
  height: 30px;
  margin-top: 14px;
  display: flex;
  align-items: center;
  // background-color: ${cores.azul};
  gap: 8px;

  button {
    border: none;
    border-radius: 11px;
    background-color: transparent;
    color: rgba(0, 191, 255, 0.6);
    padding-left: 8px;
    padding-right: 9px;
    padding-top: 5px;
    padding-bottom: 4px;
    transition: background-color 0.5s ease;

    // font-weight: 700;

    span {
      margin-left: 2px;
      font-size: 15px;
      margin-bottom: 6px;
    }

    i {
      padding-top: 6px;
    }

    :hover {
      color: ${cores.textoClaro};
      background-color: rgba(0, 191, 255, 0.8);
      transition: background-color 0.5s ease;
    }
  }
`;