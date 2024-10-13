import * as S from './styles';
import logo from '../../assets/x-logo.jpg';

export const LoginForm = () => {
  return (
    <S.Content>
      <S.ImageDiv>
        <img src={logo} alt="" />
      </S.ImageDiv>

      <S.Options>
        <S.Title>Fazer Login</S.Title>
        <S.Form action="">
          <S.Label htmlFor="">Usuário:</S.Label>
          <S.Input type="text" />
          <S.Label htmlFor="">Senha:</S.Label>
          <S.Input type="text" />
          <S.DivButtons>
            <S.Button to={`/`}>Login</S.Button>
            <S.CancelButton to={`/`}>Cancelar</S.CancelButton>
          </S.DivButtons>
        </S.Form>
      </S.Options>
    </S.Content>
  );
};
