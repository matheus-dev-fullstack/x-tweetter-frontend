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
    // perfilPhoto: File;
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Usuario>();

  const navigate = useNavigate();

  // const [perfilPhoto, setPerfilPhoto] = useState(null);

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setPerfilPhoto(file);
  // };

  const onSubmit = async (data: Usuario) => {
    try {
      const formData = new FormData();

      formData.append('name', data.name);
      formData.append('username', data.username);
      formData.append('password', data.password);
      // formData.append('perfilPhoto', data.perfilPhoto);

      await axios.post('http://127.0.0.1:8000/auth/usuarios/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      navigate('/feed');
    } catch (error) {
      console.log('Erro ao cadastrar o usuaário:', error);
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
          />
          {errors.name && <p>{errors.name.message}</p>}
          <S.Label htmlFor="username">Usuário:</S.Label>
          <S.Input
            {...register('username', { required: 'Username é obrigatório' })}
            type="text"
          />
          {errors.username && <p>{errors.username.message}</p>}

          <S.Label htmlFor="password">Senha:</S.Label>
          <S.Input
            {...register('password', { required: 'Senha é obrigatória' })}
            type="password"
          />
          {errors.password && <p>{errors.password.message}</p>}

          {/* <S.Label htmlFor="perfilPhoto" onChange={handleFileChange}>
            Foto de Perfil:
          </S.Label>
          <S.InputFile
            {...register('perfilPhoto', {
              required: false
            })}
            className="form-control form-control-sm"
            type="file"
          />
          {errors.perfilPhoto && <p>{errors.perfilPhoto.message}</p>} */}

          <S.DivButtons>
            <S.ButtonSubmit type="submit">Cadastrar</S.ButtonSubmit>
            <S.CancelButton to={`/`}>Voltar</S.CancelButton>
          </S.DivButtons>
        </S.Form>
      </S.Options>
    </S.Content>
  );
};
