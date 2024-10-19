import * as S from './styles';

import React, { useState, useEffect } from 'react';

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
  comentarios: number[];
};

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/feed/posts/')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar os posts:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <S.Container>
      <S.Header>
        <S.Button>For You</S.Button>
        <S.Button>Following</S.Button>
      </S.Header>
      <S.PostList>
        {posts.map((post) => (
          <S.Post key={post.id}>
            <S.ProfileButton>
              <S.ProfileImage
                // src={dolangue}
                src={post.author.perfilPhoto}
                // alt={post.author.name}
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
                {post.imagens.length > 0 && (
                  <S.ImageDiv>
                    {post.imagens.map((imagem) => (
                      <img
                        key={imagem.id}
                        src={imagem.image}
                        alt="Post Content"
                      />
                    ))}
                  </S.ImageDiv>
                )}
                <S.Actions>
                  <button>
                    <i className="bi bi-heart"></i>
                    <span>{post.likes.length}</span>
                  </button>
                  <button>
                    <i className="bi bi-chat"></i>
                    <span>{post.comentarios.length}</span>
                  </button>
                </S.Actions>
              </S.Row>
            </S.ProfileButton>
          </S.Post>
        ))}
      </S.PostList>
    </S.Container>
  );
};

export default Posts;
