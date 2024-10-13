import * as S from './styles';
import logo from '../../assets/x-logo.jpg';

export const LoginOptions = () => {
  return (
    <S.Content>
      <S.ImageDiv>
        <img src={logo} alt="" />
      </S.ImageDiv>

      <S.Options>
        <S.Title>Acontecendo Agora</S.Title>

        <S.TextSubscribe>Inscreva-se hoje</S.TextSubscribe>
        <S.Button>Criar conta</S.Button>
        <S.Terms>
          Ao se inscrever, você concorda com os <span>Termos de Serviço</span> e{' '}
          <br />a <span>Política de Privacidade</span>, incluindo o{' '}
          <span>Uso de Cookies</span>.
        </S.Terms>
        <S.LoginTitle>Já tem uma conta?</S.LoginTitle>
        <S.LoginButton>Login</S.LoginButton>
      </S.Options>
    </S.Content>
  );
};
