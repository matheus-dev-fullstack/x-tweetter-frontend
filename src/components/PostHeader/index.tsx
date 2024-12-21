import { useNavigate } from 'react-router-dom';
import { PostForm } from '../PostForm';
import * as S from './styles';

import React, { useState, useEffect } from 'react';
import { error } from 'console';

const PostHeader = ({
  toggleApiUrlFollowing,
  toggleApiUrlAll
}: {
  toggleApiUrlFollowing: () => void;
  toggleApiUrlAll: () => void;
}) => {
  const navigate = useNavigate();

  return (
    <S.Header>
      <S.Button onClick={toggleApiUrlAll}>For You</S.Button>
      <S.Button onClick={toggleApiUrlFollowing}>Following</S.Button>
    </S.Header>
  );
};

export default PostHeader;
