import * as S from './styles';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

type Perfil = {
  name?: string;
  username?: string;
  photo?: File;
  banner?: File;
  following_count?: number;
  followers_count?: number;
};

export const PerfilDetail = () => {
  const navigate = useNavigate();
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<Perfil>();

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
        const response = await axios.get('http://127.0.0.1:8000/auth/perfil/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setPerfil(response.data);
        setValue('name', response.data.name);
        setValue('username', response.data.username);
        setValue('photo', response.data.photo);
        setValue('banner', response.data.banner);
      } catch (error) {
        console.error('Erro ao carregar o perfil:', error);
        setError('Erro ao carregar o perfil.');
      }
    };

    fetchPerfil();
  }, [navigate, setValue]);

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

      if (data.photo && data.photo instanceof File) {
        formData.append('photo', data.photo);
      }

      if (data.banner && data.banner instanceof File) {
        formData.append('banner', data.banner);
      }

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

      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Banner>
          <label id="bannerLabel" htmlFor="banner" className="w-100">
            <span id="overlay">Editar banner</span>
            <img
              src={
                bannerFile && bannerFile instanceof File
                  ? URL.createObjectURL(bannerFile)
                  : perfil?.banner && typeof perfil.banner === 'string'
                  ? perfil.banner
                  : ''
              }
              alt="Banner"
            />
          </label>
          <input
            id="banner"
            type="file"
            accept="image/*"
            {...register('banner')}
          />

          <S.PerfilPhoto>
            <label id="photoLabel" htmlFor="photo">
              <span id="overlay">Editar foto</span>
              <img
                src={
                  photoFile && photoFile instanceof File
                    ? URL.createObjectURL(photoFile)
                    : perfil?.photo && typeof perfil.photo === 'string'
                    ? perfil.photo
                    : ''
                }
                alt="Foto de perfil"
              />
            </label>
            <input
              id="photo"
              type="file"
              accept="image/*"
              {...register('photo')}
            />
          </S.PerfilPhoto>
        </S.Banner>
        <S.Details>
          <label htmlFor="name">Nome</label>
          <input type="text" {...register('name')} />
          <label htmlFor="username">Nome de Usuário</label>
          <input type="text" {...register('username')} />
          <button type="submit" className="btn btn-light">
            Salvar
          </button>
        </S.Details>
      </form>
    </S.Container>
  );
};

export default PerfilDetail;
