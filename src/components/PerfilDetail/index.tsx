import * as S from './styles';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PostListPerfil from '../PostListPerfil';

type Perfil = {
  name?: string;
  username?: string;
  photo?: string | File;
  banner?: string | File;
  following_count?: number;
  followers_count?: number;
};

export const PerfilDetail = () => {
  const navigate = useNavigate();
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | undefined>(
    undefined
  );
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);
  const [bannerPreview, setBannerPreview] = useState<string | undefined>(
    undefined
  );
  const [selectedBanner, setSelectedBanner] = useState<File | null>(null);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setSelectedPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };
  const handleBannerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setSelectedBanner(file);
      setBannerPreview(URL.createObjectURL(file));
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<Perfil>();

  useEffect(() => {
    const fetchPerfil = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/home');
        return;
      }

      try {
        const response = await axios.get(
          // 'http://127.0.0.1:8000/auth/perfil/',
          'https://matheusdevfullstack.pythonanywhere.com/auth/perfil/',
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        setPerfil(response.data);
        setValue('name', response.data.name);
        setValue('photo', response.data.photo);
        setValue('banner', response.data.banner);

        if (response.data.photo) {
          setPhotoPreview(response.data.photo);
        }
        if (response.data.banner) {
          setBannerPreview(response.data.banner);
        }
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

      if (selectedPhoto) {
        formData.append('photo', selectedPhoto);
      }

      if (selectedBanner) {
        formData.append('banner', selectedBanner);
      }

      await axios.patch(
        // 'http://127.0.0.1:8000/auth/perfil/editar-perfil/',
        'https://matheusdevfullstack.pythonanywhere.com//auth/perfil/editar-perfil/',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      alert('Perfil atualizado com sucesso!');
      navigate('/');
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
        <button onClick={() => navigate('/')}>
          <i className="bi bi-arrow-left-short"></i>
        </button>
        <h4>{perfil?.name}</h4>
      </S.Header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Banner>
          <label htmlFor="banner" id="bannerLabel" className="w-100">
            <span id="overlay">Editar banner</span>
            <img src={bannerPreview} alt="Banner" />
          </label>
          <span id="overlay">Editar Banner</span>
          <input
            id="banner"
            type="file"
            accept="image/*"
            {...register('banner', { setValueAs: (value) => value[0] })}
            onChange={handleBannerChange}
            className="hidden"
          />

          <S.PerfilPhoto>
            <label id="photoLabel" htmlFor="photo">
              <span id="overlay">Editar foto</span>
              <img src={photoPreview} alt="Foto de perfil" />
            </label>
            <input
              id="photo"
              type="file"
              accept="image/*"
              {...register('photo', { setValueAs: (value) => value[0] })}
              onChange={handlePhotoChange}
              className="hidden"
            />
          </S.PerfilPhoto>
        </S.Banner>
        <S.Details>
          <S.Name>
            <input type="text" {...register('name')} />
            <button type="submit" className="btn btn-light">
              Salvar alterações
            </button>
          </S.Name>
          <S.Username>{perfil?.username}</S.Username>
          <S.Followers>
            <span>
              <b>{perfil?.following_count}</b> Following
            </span>
            <span>
              <b>{perfil?.followers_count}</b> Followers
            </span>
          </S.Followers>
        </S.Details>
      </form>
      <PostListPerfil username={perfil?.username} />
    </S.Container>
  );
};

export default PerfilDetail;
