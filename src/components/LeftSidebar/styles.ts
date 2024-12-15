import styled from 'styled-components';
import { cores } from '../../styles';
import { SecondaryButton } from '../LoginOptions/styles';

export const Sidebar = styled.header`
  width: 264px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

export const Logo = styled.a`
  width: 264px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  // margin-top: 8px;
  cursor: pointer;

  img {
    height: 42px;
  }
`;

export const Links = styled.ul`
  width: 100%;
  display: flex;
  margin: 0;
  margin-top: 6px;
  padding: 0;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 10px;
`;

export const Link = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 10px;
  padding-right: 14px;
  border-radius: 23px;
  transition: background-color 0.2s ease;
  color: ${cores.textoClaro};
  text-decoration: none;

  :hover,
  #selected {
    background-color: ${cores.cinzaSecundario};
    transition: background-color 0.2s ease;
  }

  i {
    padding-left: 2px;
    font-size: 20px;
    font-weight: bold;
  }

  p {
    font-size: 20px;
    margin: 0;
    padding-left: 21px;
    padding-right: 8px;
  }
`;
export const PostButton = styled(SecondaryButton)`\
  width: 234px;
  height: 52px;
  margin-top: 24px;
  font-size: 16px;
  font-weight: 700;
  padding-top: 14px;
  padding-bottom: 14px;
`;

export const ProfileButton = styled.button`
  height: 60px;
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 28px;
  // padding-left: 8px;
  padding-right: 14px;
  border-radius: 34px;
  border: none;
  background-color: transparent;
  transition: background-color 0.2s ease;

  :hover {
    background-color: ${cores.cinzaSecundario};
    transition: background-color 0.2s ease;
  }

  i {
    margin-left: auto;
    margin-top: 4px;
    color: ${cores.textoClaro};
    font-size: 18px;
  }
`;
export const ProfileImage = styled.img`
  height: 42px;
  width: 42px;
  margin-left: 8px;
  margin-right: 6px;
  border-radius: 21px;
  object-fit: cover;
`;
export const ProfileName = styled.div`
  height: 42px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-left: 4px;

  p,
  span {
    line-height: 16px;
    padding: 0;
    margin: 0;
  }

  p {
    font-size: 15px;
    font-weight: 700;
    color: ${cores.textoClaro};
    margin-bottom: 4px;
  }

  span {
    font-size: 14px;
    color: ${cores.textoCinza};
    margin-left: 3px;
  }
`;
