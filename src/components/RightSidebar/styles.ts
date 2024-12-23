import styled from 'styled-components';
import { cores } from '../../styles';
import { SecondaryButton } from '../LoginOptions/styles';
import { Link } from 'react-router-dom';
import { Verified } from '../Posts/styles';

export const Sidebar = styled.div`
  width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 60px;
  overflow-y: hidden;
  position: fixed;
  right: 0;
  top: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Search = styled.div`
  position: relative;
  width: 350px;
  height: 44px;
  display: flex;
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  border-radius: 40px;
  border: none;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const SearchButton = styled.button`
  position: absolute;
  height: 35px;
  width: 35px;
  border-radius: 20px;
  border: none;
  margin-left: 10px;
  margin-top: 2px;
  color: ${cores.textoCinza};
  background-color: transparent;
`;
export const Input = styled.input`
  height: 100%;
  width: 100%;
  border-radius: 32px;
  border: 2px solid rgb(36, 36, 36);
  padding-left: 54px;
  background-color: rgb(36, 36, 36);
  font-size: 16px;
`;

export const Icon = styled.i`
  height: 100%;
  width: 100%;
`;

export const Card = styled.div`
  width: 100%;
  border-radius: 14px;
  border: 1px solid rgb(36, 36, 36);
  margin-top: 20px;
`;

export const Title = styled.h2`
  color: ${cores.textoClaro};
  font-size: 22px;
  font-family: font-family: inherit;
  text-align: inherit;
  margin-bottom: 8px;
  padding-top: 14px;
  padding-left: 15px;
  padding-right: 14px;
`;

export const Trending = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 15px;
  padding-right: 14px;
  padding-top: 12px;
  padding-bottom: 14px;
  text-decoration: none;

  :hover {
    background-color: rgba(255, 255, 255, 0.03);
    cursor: pointer;
  }

  p {
    font-size: 15px;
    font-weight: 700;
    color: ${cores.textoClaro};
    margin: 0;
    margin-left: 0.5px;
  }
`;

export const DetailTrending = styled.div`
    font-size: 12px;
    color: ${cores.textoCinza};
    font-family: font-family: inherit;
    text-align: inherit;

`;

export const Location = styled.span`
      font-size: 12px;
    color: ${cores.azul};
    font-family: font-family: inherit;
    text-align: inherit;
`;

export const ShowMore = styled.p`
  color: ${cores.azul};
  font-size: 14px;
  padding-left: 15px;
  padding-right: 14px;
  padding-top: 16px;
  padding-bottom: 12px;
  margin: 0;

  :hover {
    background-color: rgba(255, 255, 255, 0.03);
    cursor: pointer;
  }
`;

export const ProfileButton = styled.a`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 14px;
  padding-bottom: 14px;
  border: none;
  border-radius: 0 0 14px 14px;
  background-color: transparent;
  transition: background-color 0.2s ease;
  text-decoration: none;

  :hover {
    background-color: ${cores.cinzaSecundario};
    transition: background-color 0.2s ease;
  }

  i {
    margin-left: auto;
    margin-right: 6px;
  }
`;
export const ProfileImage = styled.img`
  height: 42px;
  width: 42px;
  object-fit: cover;
  border-radius: 50%;
  // transform: scale(2);
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
    margin-right: 4px;
    color: ${cores.textoClaro};
    margin-bottom: 4px;
  }

  span {
    font-size: 15px;
    color: ${cores.textoCinza};
    margin-left: 3px;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 15px;
  font-weight: 500;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  background-color: ${cores.branco};
  color: ${cores.preto};
`;
export const Terms = styled.div`
  padding: 14px;
  display: flex;

  flex-wrap: wrap;
  grid-gap: 2px 10px;

  a {
    text-decoration: none;
    font-size: 13px;
    color: ${cores.textoCinza};
  }
`;

export const VerifiedPlus = styled(Verified)`
  padding-left: 5px;
  color: #ffd700;
`;
