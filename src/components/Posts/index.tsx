import { useNavigate } from 'react-router-dom';
import { PostForm } from '../PostForm';
import * as S from './styles';

import { useState, useEffect } from 'react';
import { error } from 'console';
import PostHeader from '../PostHeader';
import PostList from '../PostList';

const Posts = () => {
  const [apiUrl, setApiUrl] = useState('http://127.0.0.1:8000/feed/posts/');

  const toggleApiUrlFollowing = () => {
    setApiUrl('http://127.0.0.1:8000/feed/posts/following-posts/');
  };

  const toggleApiUrlAll = () => {
    setApiUrl('http://127.0.0.1:8000/feed/posts/');
  };

  return (
    <S.Container>
      <PostHeader
        toggleApiUrlFollowing={toggleApiUrlFollowing}
        toggleApiUrlAll={toggleApiUrlAll}
      />
      <PostForm />
      <PostList apiUrl={apiUrl} />
    </S.Container>
  );
};

export default Posts;
