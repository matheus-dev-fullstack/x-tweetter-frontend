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
        data,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      // Verifique a resposta do servidor
      console.log('Resposta do servidor:', response.data);
      navigate('/feed');
    } catch (error) {
      alert('Erro no login');
      console.log('Erro no login:', error);
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
          />
          <S.Label htmlFor="password">Senha:</S.Label>
          <S.Input
            {...register('password', { required: 'Senha é obrigatória' })}
            type="password"
          />
          <S.DivButtons>
            <S.ButtonSubmit type="submit">Login</S.ButtonSubmit>
            <S.CancelButton to={`/`}>Cancelar</S.CancelButton>
          </S.DivButtons>
        </S.Form>
      </S.Options>
    </S.Content>
  );
};
