import { useNavigate } from 'react-router-dom';
import { PostForm } from '../PostForm';
import * as S from './styles';

import React, { useState, useEffect } from 'react';
import { error } from 'console';
import PostHeader from '../PostHeader';
import { CommentUser } from '../PostList/styles';

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
    id?: number;
    name: string;
    username: string;
    photo: string;
  };
  imagem: string;
  likes: number[];
  comentarios: Comentarios;
};

interface PostListPerfilProps {
  username: string | undefined;
}

const PostListPerfil: React.FC<PostListPerfilProps> = ({ username }) => {
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
          `https://matheusdevfullstack.pythonanywhere.com/feed/posts/user-posts/${username}/`,
          // `http://127.0.0.1:8000/feed/posts/user-posts/${username}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          // console.error('Erro ao buscar os posts:', errorData);

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
        // console.error('Erro ao buscar os posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [username]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  const toggleLike = async (postId: number) => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(
        `https://matheusdevfullstack.pythonanywhere.com/feed/posts/${postId}/like/`,
        // `http://127.0.0.1:8000/feed/posts/${postId}/like/`,
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
        `https://matheusdevfullstack.pythonanywhere.com/feed/posts/${postId}/comment/`,
        // `http://127.0.0.1:8000/feed/posts/${postId}/comment/`,
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
    <S.PostList>
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <S.Post key={post.id}>
            <S.ProfileButton>
              <S.ProfileImage
                src={
                  post.author.photo ??
                  'https://img.freepik.com/vetores-premium/icone-de-perfil-de-usuario-em-estilo-plano-ilustracao-em-vetor-avatar-membro-em-fundo-isolado-conceito-de-negocio-de-sinal-de-permissao-humana_157943-15752.jpg'
                }
              />
              <S.Row>
                <S.ProfileName to={`/profile/${post.author.username}/`}>
                  <p>{post.author.name}</p>
                  <S.Verified className="bi bi-patch-check-fill"></S.Verified>{' '}
                  {/* <span>{post.user.username}</span> */}
                  <span>{post.author.username}</span>
                  <S.More className="" />
                </S.ProfileName>
                <S.TweetText>{post.content}</S.TweetText>
                {post.imagem && (
                  <S.ImageDiv>
                    <img src={post.imagem} alt="Post Content" />
                  </S.ImageDiv>
                )}
                <S.Actions>
                  <button onClick={() => toggleLike(post.id)}>
                    <i className="bi bi-heart"></i>
                    <span>{post.likes ? post.likes.length : 0}</span>
                  </button>
                  <button onClick={() => toggleComments(post.id)}>
                    <i className="bi bi-chat"></i>
                    <span>{post.comentarios.count}</span>
                  </button>
                </S.Actions>
                {showComments[post.id] && (
                  <S.Comments>
                    <S.FormComment
                      onSubmit={(event) => {
                        event.preventDefault();
                        addComment(post.id);
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Comentar"
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
                    {post.comentarios.details.map((comment) => (
                      <S.Comment key={comment.id}>
                        <CommentUser
                          to={`/profile/${comment.author.username}/`}
                        >
                          {comment.author.username}
                        </CommentUser>
                        <p>{comment.content}</p>
                      </S.Comment>
                    ))}
                  </S.Comments>
                )}
              </S.Row>
            </S.ProfileButton>
          </S.Post>
        ))
      ) : (
        <p className="w-100 text-center">Usuário não possui posts</p>
      )}
    </S.PostList>
  );
};

export default PostListPerfil;
