import { useNavigate } from 'react-router-dom';
import { PostForm } from '../PostForm';
import * as S from './styles';

import React, { useState, useEffect } from 'react';
import { error } from 'console';

type Perfil = {
  name: string;
  username: string;
  foto: string;
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
        navigate('/login');
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
            navigate('/login');
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
        <button>
          <i className="bi bi-arrow-left-short"></i>
        </button>
        {/* <h4>Matheus Oliveira</h4> */}
        <h4>{perfil?.name}</h4>
      </S.Header>
      <S.Banner>
        <img
          src="https://img.pikbest.com/origin/09/32/46/84rpIkbEsTRXW.jpg!w700wp"
          alt=""
        />
        <S.PerfilPhoto>
          <img
            src="https://img.pikbest.com/origin/09/32/46/84rpIkbEsTRXW.jpg!w700wp"
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
      </S.Details>
    </S.Container>
  );
};

export default PerfilDetail;
