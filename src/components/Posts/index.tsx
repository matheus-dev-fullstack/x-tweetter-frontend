import { useNavigate } from 'react-router-dom';
import { PostForm } from '../PostForm';
import * as S from './styles';

import React, { useState, useEffect } from 'react';
import { error } from 'console';
export type ComentarioForm = {
  content: string;
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
  imagens: {
    id: number;
    image: string;
    post: number;
  }[];
  likes: number[];
  comentarios: ComentarioForm[];
};

const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [comentario, setComentario] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const fetchPosts = async () => {
      const token = localStorage.getItem('token'); // Obtém o token do localStorage

      if (!token) {
        console.error('Token não encontrado, redirecionando para login.');
        navigate('/login');
        return;
      }

      try {
        const response = await fetch(
          // 'https://matheusdevfullstack.pythonanywhere.com/feed/posts/',
          'http://127.0.0.1:8000/feed/posts/',
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
          }
          throw new Error('Erro na requisição');
        }

        const data = await response.json();
        setPosts(data);
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
        const newComment = await response.json();

        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === postId
              ? {
                  ...post,
                  comentarios: [...post.comentarios, newComment]
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
    <S.Container>
      <S.Header>
        <S.Button>For You</S.Button>
        <S.Button>Following</S.Button>
      </S.Header>
      <PostForm />
      {error && <p>{error}</p>}
      <S.PostList>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <S.Post key={post.id}>
              <S.ProfileButton>
                <S.ProfileImage
                  // src="https://conteudize.ai/blog/wp-content/uploads/2024/06/como-criar-prompts-para-geracao-de-imagens-com-ia.webp"
                  src={post.author.perfilPhoto}
                  alt={post.author.name}
                />
                <S.Row>
                  <S.ProfileName>
                    <p>{post.author.name}</p>
                    <S.Verified className="bi bi-patch-check-fill"></S.Verified>{' '}
                    {/* <span>{post.user.username}</span> */}
                    <span>{post.author.username}</span>
                    <S.More className="bi bi-three-dots" />
                  </S.ProfileName>
                  <S.TweetText>{post.content}</S.TweetText>
                  {/* {post.imagens.length > 0 && (
                    <S.ImageDiv>
                      {post.imagens.map((imagem) => (
                        <img
                          key={imagem.id}
                          src={imagem.image}
                          alt="Post Content"
                        />
                      ))}
                    </S.ImageDiv>
                  )} */}
                  <S.Actions>
                    <button onClick={() => toggleLike(post.id)}>
                      <i className="bi bi-heart"></i>
                      <span>{post.likes.length}</span>
                    </button>
                    <button>
                      <i className="bi bi-chat"></i>
                      <span>{post.comentarios.length}</span>
                    </button>
                    <S.FormComment
                      onSubmit={(event) => {
                        event.preventDefault();
                        addComment(post.id);
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Escreva seu comentário"
                        // value={comentario[post.id] || ''}
                        value={comentario[post.id] || ''}
                        onChange={(e) =>
                          setComentario((prev) => ({
                            ...prev,
                            [post.id]: e.target.value
                          }))
                        }
                      />
                      <button type="submit">Enviar</button>
                    </S.FormComment>
                  </S.Actions>
                </S.Row>
              </S.ProfileButton>
            </S.Post>
          ))
        ) : (
          <p>Erooo</p>
        )}
      </S.PostList>
    </S.Container>
  );
};

export default Posts;
