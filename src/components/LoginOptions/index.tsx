import * as S from './styles';
import logo from '../../assets/x-logo.jpg';

export const LoginOptions = () => {
  return (
    <S.Content>
      <S.ImageDiv>
        <img src={logo} alt="" />
      </S.ImageDiv>

      <div>
        <button>Criar conta</button>
        <p>
          Ao se inscrever, você concorda com os Termos de Serviço e <br />a
          Política de Privacidade, incluindo o Uso de Cookies.
        </p>
        <button>Login</button>
      </div>
    </S.Content>
  );
};
