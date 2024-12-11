import * as S from './styles';
import logo from '../../assets/x-logo.jpg';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const PostForm = () => {
  type Post = {
    content: string;
    imagens: FileList;
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Post>();

  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const onSubmit = async (data: Post) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token não encontrado, redirecionando para login.');
        navigate('/login');
        return;
      }

      const formData = new FormData();
      formData.append('content', data.content);

      if (selectedImage) {
        formData.append('imagem', selectedImage);
      }

      await axios.post('http://127.0.0.1:8000/feed/posts/', formData, {
        // await axios.post(
        //   'https://matheusdevfullstack.pythonanywhere.com/feed/posts/',
        //   formData,
        // {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      window.location.reload();
      // setSelectedImage([]);
      // navigate('/feed');
    } catch (error) {
      console.log('Erro ao criar post:', error);
    }
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]); // Armazena apenas a primeira imagem selecionada
    }
  };

  return (
    <S.Div>
      <S.ProfileImage src={logo} alt="" />
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Input
          placeholder="What is happening?!"
          {...register('content', { required: 'Adicione uma descrição.' })}
        />
        {errors.content && <p>{errors.content.message}</p>}
        <S.Options>
          <S.Attachments>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {selectedImage && <p>Imagem selecionada: {selectedImage.name}</p>}
          </S.Attachments>
          <S.ButtonSubmit type="submit">Post</S.ButtonSubmit>
        </S.Options>
      </S.Form>
    </S.Div>
  );
};
