import styled from 'styled-components';
import { cores } from '../../styles';
import { SecondaryButton } from '../LoginOptions/styles';

export const Sidebar = styled.header`
  width: 264px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
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
