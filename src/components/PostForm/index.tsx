import * as S from './styles';
import logo from '../../assets/x-logo.jpg';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const PostForm = () => {
  type Post = {
    content: string;
    // perfilPhoto: File;
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Post>();

  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<File[]>([]);

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

      selectedImage.forEach((image, index) => {
        formData.append(`imagens-${index}`, image);
      });

      await axios.post('http://127.0.0.1:8000/feed/posts/', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      setSelectedImage([]);
      navigate('/feed');
    } catch (error) {
      console.log('Erro ao criar post:', error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedImage(Array.from(e.target.files));
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
            <S.InputFile>
              <label htmlFor="imagens">
                <i className="bi bi-image"></i>
              </label>
              <input
                id="imagens"
                type="file"
                multiple
                onChange={handleImageChange}
                placeholder="Add images"
                accept="image/*"
              />
            </S.InputFile>
          </S.Attachments>
          <S.ButtonSubmit type="submit">Post</S.ButtonSubmit>
        </S.Options>
      </S.Form>
    </S.Div>
  );
};
