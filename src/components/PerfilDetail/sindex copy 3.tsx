import { useNavigate } from 'react-router-dom';
import { PostForm } from '../PostForm';
import * as S from './styles';

import React, { useState, useEffect } from 'react';
import { error } from 'console';
import PostList from '../PostList';
import PostListPerfil from '../PostListPerfil';
import { useForm } from 'react-hook-form';
import axios from 'axios';

type Perfil = {
  name: string;
  username: string;
  photo: string;
  banner: string;
};

type EditFormInputs = {
  name: string;
  photo: File | null;
  banner: File | null;
};

const PerfilDetail = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<EditFormInputs>();

  const photoFile = watch('photo');
  const bannerFile = watch('banner');

  useEffect(() => {
    const fetchPerfil = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/home');
        return;
      }

      try {
        const response = await fetch(
          'http://127.0.0.1:8000/auth/perfil/',
          // 'https://matheusdevfullstack.pythonanywhere.com/auth/perfil/',
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        );
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Erro ao buscar os posts:', errorData);

          if (errorData.code === 'token_not_valid') {
            console.error('Token inválido, redirecionando para login.');
            localStorage.removeItem('token');
            navigate('/home');
            return;
          }
        }
        const data = await response.json();
        console.log(data);
        setPerfil(data);
      } catch (err) {
        console.log(err);
        console.error('Erro de rede:', err);
        setError('Erro ao carregar o perfil.');
      }
    };
    fetchPerfil();
  }, [navigate, setPerfil]);

  const onSubmit = async (data: Perfil) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/home');
        return;
      }

      const formData = new FormData();
      if (data.name) formData.append('name', data.name);
      if (data.username) formData.append('username', data.username);

      // if (data.photo && data.photo instanceof File) {
      //   formData.append('photo', data.photo);
      // }

      // if (data.banner && data.banner instanceof File) {
      //   formData.append('banner', data.banner);
      // }

      await axios.patch(
        'http://127.0.0.1:8000/auth/perfil/editar-perfil/',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      alert('Perfil atualizado com sucesso!');
      navigate('/my-profile/');
    } catch (error: any) {
      console.error(
        'Erro ao atualizar perfil:',
        error.response?.data || error.message
      );
      alert('Erro ao atualizar perfil. Verifique os campos e tente novamente.');
    }
  };

  if (error) return <p>{error}</p>;

  return (
    <S.Container>
      <S.Header>
        <button onClick={() => navigate(-1)}>
          <i className="bi bi-arrow-left-short"></i>
        </button>
        <h4>{perfil?.name}</h4>
      </S.Header>
      <S.Banner>
        <img
          // src="https://img.pikbest.com/origin/09/32/46/84rpIkbEsTRXW.jpg!w700wp"
          src={perfil?.banner}
          alt=""
          className=""
        />
        <S.PerfilPhoto>
          <img
            // src="https://img.pikbest.com/origin/09/32/46/84rpIkbEsTRXW.jpg!w700wp"
            src={perfil?.photo}
            alt=""
          />
        </S.PerfilPhoto>
      </S.Banner>
      <S.Details>
        <h4>{perfil?.name}</h4>
        <S.Username>{perfil?.username}</S.Username>
        <S.Followers>
          <span>
            <b>1</b> Following
          </span>
          <span>
            <b>0</b> Followers
          </span>
        </S.Followers>
        <button onClick={() => setShowEditForm(!showEditForm)}>
          {showEditForm ? 'Cancelar' : 'Editar Perfil'}
        </button>
        {/* {showEditForm && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nome:</label>
            <input
              {...register('name', { required: 'Nome é obrigatório' })}
              type="text"
              placeholder="Novo Nome"
            />
            {errors.name && <p>{errors.name.message}</p>}

            <label>Foto de Perfil:</label>
            <input
              {...register('photo')}
              type="file"
              accept="image/*"
              onChange={(e) => setValue('photo', e.target.files?.[0] || null)}
            />

            <label>Banner:</label>
            <input
              {...register('banner')}
              type="file"
              accept="image/*"
              onChange={(e) => setValue('banner', e.target.files?.[0] || null)}
            />

            <button type="submit">Salvar Alterações</button>
          </form>
        )} */}
      </S.Details>
      <PostListPerfil username={perfil?.username} />
    </S.Container>
  );
};

export default PerfilDetail;
