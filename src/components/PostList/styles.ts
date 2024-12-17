import styled from 'styled-components';
import { cores } from '../../styles';
import { Link } from 'react-router-dom';

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
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(031, 033, 034, 0.6);
  background-color: transparent;
`;
export const Button = styled.button`
  height: 100%;
  width: 50%;
  font-size: 14px;
  font-weight: 700;
  color: ${cores.branco};
  background-color: rgba(50, 50, 50, 0.05);
  backdrop-filter: blur(2px);
  // background-color: transparent;

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
  // min-height: 380px;
  max-height: 620px;
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
export const Follow = styled.button<{ isFollowing: boolean }>`
  margin-left: auto;
  color: ${cores.textoCinza};
  // color: ${(props) => (props.isFollowing ? 'red' : '${cores.textoCinza}')};
  font-size: 16px;
  background-color: transparent;
  border: none;
`;
export const Verified = styled.i`
  margin-left: 6px;
  margin-right: 5px;
  // padding-top: 2px;
  color: ${cores.azul};
  // margin-right: 4px;
`;

export const ProfileImage = styled.img`
  height: 42px;
  width: 42px;
  object-fit: cover;
  border-radius: 21px;
  margin-bottom: auto;
  margin-right: 12px;
`;
export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  // background-color: ${cores.cinzaSecundario};
`;
export const ProfileName = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

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
    max-height: 340px;
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

export const FormComment = styled.form`
  // width: 310px;
  display: flex;
  justify-content: space-between;
  border-radius: 3px;
  margin-bottom: 12px;
  height: 30px;

  input {
    width: 100%;
    height: 100%;
    // border: none;
    font-size: 14px;
    padding: 4px 12px;
    border-radius: 4px 0 0 4px;
    background-color: #000;
    border: 1px solid ${cores.cinzaSecundario};
    color: ${cores.textoCinza};

    :focus {
      outline: none;
    }
  }

  button {
    border-radius: 0 6px 6px 0;
    border: 1px solid white;
    // height: 29px;
    padding: 3px 16px;
    font-size: 12px;
  }
`;
export const Comments = styled.div`
  display: flex
  flex-direction: column;
  margin-bottom: 8px;
  margin-top: 8px;
  margin-right: 8px;
`;
export const Comment = styled.div`
  border: 1px solid rgba(131, 133, 134, 1);
  color: ${cores.textoClaro};
  margin-top: 2px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 4px 12px;

  span {
    margin-right: 12px;
    color: ${cores.azul};
    font-size: 14px;
  }

  p {
    text-align: center;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
  }
`;

export const CommentUser = styled(Link)`
  margin-right: 12px;
  color: ${cores.azul};
  font-size: 14px;
  text-decoration: none;
`;
