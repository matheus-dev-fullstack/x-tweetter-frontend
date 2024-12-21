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
    setError,
    formState: { errors }
  } = useForm<Login>();

  const onSubmit = async (data: Login) => {
    try {
      const response = await axios.post(
        // 'http://127.0.0.1:8000/auth/login/',
        'https://matheusdevfullstack.pythonanywhere.com/auth/login/',
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
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setError('username', {
          type: 'manual',
          message: 'Usuário ou senha inválidos.'
        });
      } else {
        setError('username', {
          type: 'manual',
          message: 'Erro no servidor. Tente novamente mais tarde.'
        });
      }
      // alert('Erro no login');
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
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.value[0] !== '@') {
                e.target.value = '@' + e.target.value.replace('@', '');
              }
            }}
          />
          {errors.username && (
            <p className="text-info">{errors.username.message}</p>
          )}

          <S.Label htmlFor="password">Senha:</S.Label>
          <S.Input
            {...register('password', { required: 'Senha é obrigatória' })}
            type="password"
            placeholder="Senha"
          />
          {errors.password && (
            <p className="text-info">{errors.password.message}</p>
          )}

          <S.DivButtons>
            <S.ButtonSubmit type="submit">Login</S.ButtonSubmit>
            <S.CancelButton to={`/home`}>Cancelar</S.CancelButton>
          </S.DivButtons>
        </S.Form>
      </S.Options>
    </S.Content>
  );
};
