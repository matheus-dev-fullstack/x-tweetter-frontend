import * as S from './styles';
import logo from '../../assets/x-logo.jpg';

export const RegisterForm = () => {
  return (
    <S.Content>
      <S.ImageDiv>
        <img src={logo} alt="" />
      </S.ImageDiv>

      <S.Options>
        <S.Title>Cadastre-se:</S.Title>
        <S.Form action="">
          <S.Label htmlFor="username">Nome:</S.Label>
          <S.Input name="username" type="text" />
          <S.Label htmlFor="user">Usuário:</S.Label>
          <S.Input name="user" type="text" />
          <S.Label htmlFor="password">Senha:</S.Label>
          <S.Input name="password" type="password" />
          <S.DivButtons>
            <S.Button to={`/`}>Cadastrar</S.Button>
            <S.CancelButton to={`/`}>Voltar</S.CancelButton>
          </S.DivButtons>
        </S.Form>
      </S.Options>
    </S.Content>
  );
};
