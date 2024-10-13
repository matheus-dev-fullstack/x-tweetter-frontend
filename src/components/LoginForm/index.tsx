import * as S from './styles';
import logo from '../../assets/x-logo.jpg';

export const LoginForm = () => {
  return (
    <S.Content>
      <S.ImageDiv>
        <img src={logo} alt="" />
      </S.ImageDiv>

      <S.Options>
        <S.Title>Fazer Login:</S.Title>
        <S.Form action="">
          <S.Label htmlFor="user">Usuário:</S.Label>
          <S.Input name="user" type="text" />
          <S.Label htmlFor="password">Senha:</S.Label>
          <S.Input name="password" type="password" />
          <S.DivButtons>
            <S.Button to={`/feed`}>Login</S.Button>
            <S.CancelButton to={`/`}>Cancelar</S.CancelButton>
          </S.DivButtons>
        </S.Form>
      </S.Options>
    </S.Content>
  );
};
