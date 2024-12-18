import { useNavigate } from 'react-router-dom';
import { PostForm } from '../PostForm';
import * as S from './styles';

import React, { useState, useEffect } from 'react';
import { error } from 'console';
export type Comentario = {
  id?: number;
  count: number;
  author: {
    id?: string;
    name: string;
    username: string;
  };
  user: number;
  content: string;
  post: number;
};

export type Comentarios = {
  count: number;
  details: Comentario[];
};

export type Post = {
  id: number;
  content: string;
  released: string;
  author: {
    name: string;
    username: string;
    perfilPhoto: string;
  };
  imagem: string;
  likes: number[];
  comentarios: Comentarios;
};

const PostHeader = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [comentario, setComentario] = useState<{ [key: number]: string }>({});
  const [showComments, setShowComments] = useState<{ [key: number]: boolean }>(
    {}
  );

  const toggleComments = (postId: number) => {
    setShowComments((prevShowComments) => ({
      ...prevShowComments,
      [postId]: !prevShowComments[postId]
    }));
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token não encontrado, redirecionando para login.');
        navigate('/home');
        return;
      }

      try {
        const response = await fetch(
          'http://127.0.0.1:8000/feed/posts/',
          // 'https://matheusdevfullstack.pythonanywhere.com/feed/posts/',
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
          }
          throw new Error('Erro na requisição');
        }
        const data = await response.json();
        const formattedPosts = data.map((post: Post) => ({
          ...post,
          comentarios: post.comentarios || { count: 0, details: [] }
        }));
        setPosts(formattedPosts);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar os posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [navigate]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  const toggleLike = async (postId: number) => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/feed/posts/${postId}/like/`,
        // `https://matheusdevfullstack.pythonanywhere.com/feed/posts/${postId}/like/`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.ok) {
        const userId = Number(localStorage.getItem('userId'));

        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === postId
              ? {
                  ...post,
                  likes: post.likes.includes(userId)
                    ? post.likes.filter((likeId) => likeId !== userId)
                    : [...post.likes, userId]
                }
              : post
          )
        );
      } else {
        console.error('Erro ao curtir o post');
      }
    } catch (error) {
      console.error('Erro :', error);
    }
  };

  const addComment = async (postId: number) => {
    const token = localStorage.getItem('token');
    const content = comentario[postId];

    if (!content) {
      console.error('Conteúdo do comentário vazio');
      return;
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/feed/posts/${postId}/comment/`,
        // `https://matheusdevfullstack.pythonanywhere.com/feed/posts/${postId}/comment/`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ content })
        }
      );

      if (response.ok) {
        const newComment: Comentario = await response.json();

        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === postId
              ? {
                  ...post,
                  comentarios: {
                    ...post.comentarios,
                    count: post.comentarios.count + 1,
                    details: [...post.comentarios.details, newComment]
                    // [...(post.comentarios || []), newComment]
                  }
                }
              : post
          )
        );
        setComentario((prev) => ({ ...prev, [postId]: '' }));
      } else {
        console.error(
          'Erro ao comentar o post',
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error('Erro :', error);
    }
  };

  return (
    <S.Header>
      <S.Button>For You</S.Button>
      <S.Button>Following</S.Button>
    </S.Header>
  );
};

export default PostHeader;
