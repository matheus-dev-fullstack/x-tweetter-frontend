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
    photo: File;
    banner: File;
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Usuario>();

  const navigate = useNavigate();

  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);
  const [selectedBanner, setSelectedBanner] = useState<File | null>(null);

  // const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData();

      formData.append('name', data.name);
      formData.append('username', data.username);
      formData.append('password', data.password);

      if (data.photo[0]) formData.append('photo', data.photo[0]);
      if (data.banner[0]) formData.append('banner', data.banner[0]);

      // if (selectedImage) {
      //   formData.append('perfilPhoto', selectedImage);
      // }

      const response = await axios.post(
        'http://127.0.0.1:8000/auth/registrar/',
        // 'https://matheusdevfullstack.pythonanywhere.com/auth/registrar/',
        // formData,
        // await axios.post(
        // 'https://matheusdevfullstack.pythonanywhere.com/auth/register/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      const token = response.data.access_token;
      if (token) {
        localStorage.setItem('token', token);
        navigate('/');
      } else {
        console.log('Token não recebido após o cadastro.');
        navigate('/home');
      }
      // navigate('/feed');
    } catch (error: any) {
      console.log('Erro ao cadastrar o usuário:', error);
      console.error('Erro:', error.response?.data || error.message);
    }
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
          {errors.name && <p className="text-info">{errors.name.message}</p>}
          <S.Label htmlFor="username">Usuário:</S.Label>
          <S.Input
            {...register('username', { required: 'Username é obrigatório' })}
            type="text"
            placeholder="@SeuUsername"
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              // Impede a exclusão do '@'
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
            placeholder="********"
          />
          {errors.password && (
            <p className="text-info">{errors.password.message}</p>
          )}

          <S.Label htmlFor="photo">Foto de Perfil:</S.Label>
          <S.InputFile
            // name="photo"
            {...register('photo', { required: 'Adicione uma foto de perfil' })}
            className="form-control form-control-sm mb-2"
            type="file"
            accept="image/*"
            // onChange={handlePhotoChange}
          />
          {errors.photo && <p className="text-info">{errors.photo.message}</p>}

          <S.Label htmlFor="banner">Banner do Perfil:</S.Label>
          <S.InputFile
            {...register('banner', { required: 'Adicione um Banner' })}
            // name="banner"
            className="form-control form-control-sm mb-2"
            type="file"
            accept="image/*"
            // onChange={handleBannerChange}
          />
          {errors.banner && (
            <p className="text-info">{errors.banner.message}</p>
          )}

          <S.DivButtons>
            <S.ButtonSubmit type="submit">Cadastrar</S.ButtonSubmit>
            <S.CancelButton to={`/`}>Voltar</S.CancelButton>
          </S.DivButtons>
        </S.Form>
      </S.Options>
    </S.Content>
  );
};
