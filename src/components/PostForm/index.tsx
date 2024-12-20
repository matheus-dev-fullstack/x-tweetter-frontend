import * as S from './styles';
import logo from '../../assets/x-logo.jpg';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const PostForm = () => {
  type Post = {
    content: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Post>();

  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [displayedImageName, setDisplayedImageName] = useState<string | null>(
    null
  );

  const onSubmit = async (data: Post) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token não encontrado, redirecionando para login.');
        navigate('/home');
        return;
      }

      if (!selectedImage) {
        alert('Por favor, selecione uma imagem.');
        return;
      }

      const formData = new FormData();
      formData.append('content', data.content);
      formData.append('imagem', selectedImage);

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

      setSelectedImage(null);
      window.location.reload();
      // setSelectedImage([]);
      // navigate('/feed');
    } catch (error) {
      // console.log('Erro ao criar post:', error);
      alert('Erro ao criar post:');
    }
  };
  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     setSelectedImage(e.target.files[0]); // Armazena apenas a primeira imagem selecionada
  //   }
  // };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);

      const truncatedName =
        file.name.length > 10 ? `${file.name.substring(0, 10)}...` : file.name;
      setDisplayedImageName(truncatedName);
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
          <S.Attachments className="me-auto">
            <S.InputFile>
              <label htmlFor="image-upload">
                <i className="bi bi-file-earmark-image me-2"></i>
                Add Image
              </label>
              <input
                name="image"
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={handleImageChange}
              />
            </S.InputFile>

            {displayedImageName && <p> {displayedImageName}</p>}
          </S.Attachments>
          <S.ButtonSubmit type="submit">Post</S.ButtonSubmit>
        </S.Options>
      </S.Form>
    </S.Div>
  );
};
