import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #2f2f;
`;

export const ImageDiv = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 298px;
  }
`;

export const Options = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
`;
