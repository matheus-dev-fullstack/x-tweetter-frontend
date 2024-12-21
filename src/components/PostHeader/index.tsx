import { useNavigate } from 'react-router-dom';
import { PostForm } from '../PostForm';
import * as S from './styles';

import React, { useState, useEffect } from 'react';
import { error } from 'console';

const PostHeader = () => {
  const navigate = useNavigate();

  return (
    <S.Header>
      <S.Button onClick={() => navigate('/')}>For You</S.Button>
      <S.Button onClick={() => navigate('/following/')}>Following</S.Button>
    </S.Header>
  );
};

export default PostHeader;
