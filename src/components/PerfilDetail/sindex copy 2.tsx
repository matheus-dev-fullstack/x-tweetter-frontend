import * as S from './styles';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Codigo com input de imagens funcionano já

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
  const [photoPreview, setPhotoPreview] = useState<string | null>(null); // Estado para a imagem de visualização
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null); // Estado para o arquivo da imagem

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      // Atualiza o estado com a imagem selecionada
      setSelectedPhoto(file);

      // Gera uma URL de visualização da imagem selecionada
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

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

      if (selectedPhoto) {
        formData.append('photo', selectedPhoto);
      } else {
        formData.append('photo', ''); // Caso a imagem seja removida
      }

      // Verifica o banner da mesma forma
      if (data.banner && data.banner instanceof File) {
        formData.append('banner', data.banner);
      } else if (!data.banner) {
        formData.append('banner', '');
      }

      // Envia a requisição PATCH para o backend
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
      console.log(formData);
      console.log(data.photo);
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
          {/* Banner */}
          <label
            htmlFor="banner"
            className="w-100"
            // className={isBannerEdited ? 'hidden' : 'visible'}
          >
            <span id="overlay">Editar banner</span>
            <img
              src={
                bannerFile && bannerFile instanceof File
                  ? URL.createObjectURL(bannerFile)
                  : perfil?.banner && typeof perfil.banner === 'string'
                  ? perfil.banner
                  : ''
              }
              // src={photoPreview}
              alt="Banner"
            />
          </label>
          <input
            id="banner"
            type="file"
            accept="image/*"
            {...register('banner')}
            onChange={handlePhotoChange}
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
              <img
                src={
                  photoFile && photoFile instanceof File
                    ? URL.createObjectURL(photoFile)
                    : perfil?.photo && typeof perfil.photo === 'string'
                    ? perfil.photo
                    : ''
                }
                // src={photoPreview}
                alt="Foto de perfil"
              />
            </label>
            <input
              id="photo"
              type="file"
              accept="image/*"
              {...register('photo')}
              onChange={handlePhotoChange}
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
