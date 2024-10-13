import styled from 'styled-components';
import { cores } from '../../styles';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 54px;
  width: 100%;
  display: flex;
  justify-content: center;

  .container {
    width: 1244px;
    display: flex;
    justify-content: space-between;
  }
`;

export const LeftDiv = styled.div`
  width: 264px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  img {
    height: 44px;
  }
`;

export const MiddleDiv = styled.div`
  width: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(231, 233, 234, 0.3);
`;

export const Button = styled.button`
  height: 100%;
  width: 50%;
  font-size: 14px;
  font-weight: 700;
  color: ${cores.branco};
  background-color: rgba(231, 233, 234, 0.02);
  border: none;
  transition: background-color 0.4s ease;

  :hover {
    background-color: rgba(231, 233, 234, 0.2);
    // transition: background-color 0.5s ease;
  }
`;

export const RightDiv = styled.div`
  width: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  color: ${cores.branco};
`;
export const Search = styled.div`
  position: relative;
  width: 350px;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  // justify-content: center;
  border-radius: 24px;
  background-color: ${cores.textoCinza};
`;

export const SearchButton = styled.button`
  position: absolute;
  height: 36px;
  width: 36px;
  border-radius: 20px;
  border: none;
  margin-left: 6px;
  margin-top: 2px;
  background-color: transparent;
`;
export const Input = styled.input`
  height: 100%;
  width: 100%;
  border-radius: 24px;
  border: none;
  padding-left: 50px;
`;

export const Icon = styled.i`
  height: 100%;
  width: 100%;
`;
