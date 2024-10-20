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

  // const [perfilPhoto, setPerfilPhoto] = useState(null);

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setPerfilPhoto(file);
  // };

  const onSubmit = async (data: Post) => {
    try {
      const formData = new FormData();

      formData.append('name', data.content);
      // formData.append('perfilPhoto', data.perfilPhoto);

      await axios.post('http://127.0.0.1:8000/feed/posts/', formData, {
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
    <S.Div>
      <S.ProfileImage src={logo} alt="" />
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Input
          placeholder="What is happening?!"
          {...register('content', { required: 'Adicione uma descrição.' })}
        />
        {errors.content && <p>{errors.content.message}</p>}

        {/* <S.InputFile
            {...register('perfilPhoto', {
              required: false
            })}
            className="form-control form-control-sm"
            type="file"
          />
          {errors.perfilPhoto && <p>{errors.perfilPhoto.message}</p>} */}

        <S.Options>
          <S.Attachments>
            <S.InputFile>
              <label htmlFor="imagens">
                <i className="bi bi-image"></i>
              </label>
              <input id="imagens" type="file" placeholder="Photo" />
            </S.InputFile>
            {/* <S.InputFile>
              <label htmlFor="emoji">
                <i className="bi bi-emoji-smile"></i>
              </label>
              <input id="emoji" type="emoji" />
            </S.InputFile> */}
          </S.Attachments>
          <S.ButtonSubmit type="submit">Post</S.ButtonSubmit>
        </S.Options>
      </S.Form>
    </S.Div>
  );
};
