import * as S from './styles';
import logo from '../../assets/x-logo.jpg';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const LoginForm = () => {
  const navigate = useNavigate();

  type Login = {
    username: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Login>();

  const onSubmit = async (data: Login) => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/auth/login/',
        // 'https://matheusdevfullstack.pythonanywhere.com/auth/login/',
        data,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      const token = response.data.access_token;
      localStorage.setItem('token', token);

      console.log('Resposta do servidor:', response.data);
      navigate('/');
    } catch (error) {
      alert('Erro no login');
    }
  };

  return (
    <S.Content>
      <S.ImageDiv>
        <img src={logo} alt="" />
      </S.ImageDiv>

      <S.Options>
        <S.Title>Fazer Login:</S.Title>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Label htmlFor="username">Usuário:</S.Label>
          <S.Input
            {...register('username', { required: 'Username é obrigatório' })}
            type="text"
            placeholder="@username"
          />
          <S.Label htmlFor="password">Senha:</S.Label>
          <S.Input
            {...register('password', { required: 'Senha é obrigatória' })}
            type="password"
            placeholder="Senha"
          />
          <S.DivButtons>
            <S.ButtonSubmit type="submit">Login</S.ButtonSubmit>
            <S.CancelButton to={`/home`}>Cancelar</S.CancelButton>
          </S.DivButtons>
        </S.Form>
      </S.Options>
    </S.Content>
  );
};
