import { useNavigate } from 'react-router-dom';
import { PostForm } from '../PostForm';
import * as S from './styles';

import { useState, useEffect } from 'react';
import { error } from 'console';
import PostHeader from '../PostHeader';
import PostList from '../PostList';

const Posts = () => {
  return (
    <S.Container>
      <PostHeader />
      <PostForm />
      <PostList apiUrl={''} />
    </S.Container>
  );
};

export default Posts;
