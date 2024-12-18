import { useNavigate } from 'react-router-dom';
import { PostForm } from '../PostForm';
import * as S from './styles';

import React, { useState, useEffect } from 'react';
import { error } from 'console';
import PostList from '../PostList';
import PostListPerfil from '../PostListPerfil';

type Perfil = {
  name: string;
  username: string;
  photo: string;
  banner: string;
};

const PerfilDetail = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [perfil, setPerfil] = useState<Perfil | null>(null);

  useEffect(() => {
    const fetchPerfil = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/home');
        return;
      }

      try {
        const response = await fetch(
          'http://127.0.0.1:8000/auth/perfil/ ',
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
  }, [navigate]);

  return (
    <S.Container>
      <S.Header>
        <button onClick={() => navigate(-1)}>
          <i className="bi bi-arrow-left-short"></i>
        </button>
        <h4>{perfil?.name}</h4>
      </S.Header>
      <S.Banner>
        <label id="bannerLabel" htmlFor="banner" className="w-100">
          <span id="overlay">Editar banner</span>
          <img
            // src="https://img.pikbest.com/origin/09/32/46/84rpIkbEsTRXW.jpg!w700wp"
            src={perfil?.banner}
            alt=""
            className=""
          />
        </label>
        <input
          className=""
          id="banner"
          type="file"
          accept="image/*"
          name="banner"
        />
        <S.PerfilPhoto>
          <label id="photoLabel" htmlFor="photo">
            <span id="overlay">Editar foto</span>
            <img
              // src="https://img.pikbest.com/origin/09/32/46/84rpIkbEsTRXW.jpg!w700wp"
              src={perfil?.photo}
              alt=""
            />
          </label>
          <input
            className="d-none"
            id="photo"
            type="file"
            accept="image/*"
            name="photo"
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
      </S.Details>
      <PostListPerfil username={perfil?.username} />
    </S.Container>
  );
};

export default PerfilDetail;
