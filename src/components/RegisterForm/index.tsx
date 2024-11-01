import * as S from './styles';
import logo from '../../assets/x-logo.jpg';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const RegisterForm = () => {
  type Usuario = {
    name: string;
    username: string;
    password: string;
    perfilPhoto: File | null;
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Usuario>();

  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const onSubmit = async (data: Usuario) => {
    try {
      const formData = new FormData();

      formData.append('name', data.name);
      formData.append('username', data.username);
      formData.append('password', data.password);

      // if (selectedImage) {
      //   formData.append('perfilPhoto', selectedImage);
      // }

      const response = await axios.post(
        // 'http://127.0.0.1:8000/auth/registrar/',
        'https://matheusdevfullstack.pythonanywhere.com/auth/registrar/',
        formData,
        // await axios.post(
        // 'https://matheusdevfullstack.pythonanywhere.com/auth/register/',
        // formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      const token = response.data.access_token;
      if (token) {
        localStorage.setItem('token', token);
        navigate('/feed');
      } else {
        console.log('Token não recebido após o cadastro.');
        navigate('/login');
      }
      // navigate('/feed');
    } catch (error) {
      console.log('Erro ao cadastrar o usuário:', error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedImage(file);
  };

  return (
    <S.Content>
      <S.ImageDiv>
        <img src={logo} alt="" />
      </S.ImageDiv>

      <S.Options>
        <S.Title>Cadastre-se:</S.Title>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Label htmlFor="name">Nome:</S.Label>
          <S.Input
            {...register('name', { required: 'Nome é obrigatório' })}
            type="text"
            placeholder="SeuNome"
          />
          {errors.name && <p>{errors.name.message}</p>}
          <S.Label htmlFor="username">Usuário:</S.Label>
          <S.Input
            {...register('username', { required: 'Username é obrigatório' })}
            type="text"
            placeholder="@SeuUsername"
          />
          {errors.username && <p>{errors.username.message}</p>}

          <S.Label htmlFor="password">Senha:</S.Label>
          <S.Input
            {...register('password', { required: 'Senha é obrigatória' })}
            type="password"
            placeholder="********"
          />
          {errors.password && <p>{errors.password.message}</p>}

          {/* <S.Label htmlFor="perfilPhoto">Foto de Perfil:</S.Label>
          <S.InputFile
            className="form-control form-control-sm"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          /> */}

          <S.DivButtons>
            <S.ButtonSubmit type="submit">Cadastrar</S.ButtonSubmit>
            <S.CancelButton to={`/`}>Voltar</S.CancelButton>
          </S.DivButtons>
        </S.Form>
      </S.Options>
    </S.Content>
  );
};
