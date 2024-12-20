import * as S from './styles';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
      setPhotoPreview(URL.createObjectURL(file)); // Atualiza o preview da imagem
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

      // if (selectedPhoto) {
      //   formData.append('photo', selectedPhoto);
      // } else if (data.photo) {
      //   formData.append('photo', data.photo);
      // }
      // if (selectedPhoto) {
      //   formData.append('photo', selectedPhoto);
      // } else if (data.photo && data.photo !== perfil?.photo) {
      //   formData.append('photo', data.photo);
      // }
      if (selectedPhoto) {
        formData.append('photo', selectedPhoto);
      }

      // if (selectedBanner) {
      //   formData.append('banner', selectedBanner);
      // } else if (data.banner) {
      //   formData.append('banner', data.banner);
      // }
      if (selectedBanner) {
        formData.append('banner', selectedBanner);
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
      // console.log(formData);
      // console.log(data.banner);
      console.log('Foto selecionada:', selectedPhoto);
      console.log('Banner selecionado:', selectedBanner);
      navigate('/');
    } catch (error: any) {
      console.log('Foto selecionada:', selectedPhoto);
      console.log('Banner selecionado:', selectedBanner);
      console.error(
        'Erro ao atualizar perfil:',
        error.response?.data || error.message
      );
      alert('Erro ao atualizar perfil. Verifique os campos e tente novamente.');
      console.log('Foto selecionada:', selectedPhoto);
      console.log('Banner selecionado:', selectedBanner);
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
          {/* Banner */}
          <label htmlFor="banner" className="w-100">
            <span id="overlay">Editar banner</span>
            <img src={bannerPreview} alt="Banner" />
          </label>
          <input
            id="banner"
            type="file"
            accept="image/*"
            // {...register('banner')}
            {...register('banner', { setValueAs: (value) => value[0] })} // Garante que o valor é um arquivo
            onChange={handleBannerChange}
            className="hidden"
            // onChange={() => setIsBannerEdited(true)}
            // style={{ display: isBannerEdited ? 'block' : 'none' }}
          />

          {/* Foto de Perfil */}
          <S.PerfilPhoto>
            <label
              id="photoLabel"
              htmlFor="photo"
              // className={isPhotoEdited ? 'hidden' : 'visible'}
            >
              <span id="overlay">Editar foto</span>
              <img src={photoPreview} alt="Foto de perfil" />
            </label>
            <input
              id="photo"
              type="file"
              accept="image/*"
              // {...register('photo')}
              {...register('photo', { setValueAs: (value) => value[0] })} // Garante que o valor é um arquivo
              onChange={handlePhotoChange}
              className="hidden"

              // style={{ display: isPhotoEdited ? 'block' : 'none' }}
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
