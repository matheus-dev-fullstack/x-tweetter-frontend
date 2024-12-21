import * as S from './styles';
import logo from '../../assets/x-logo.jpg';
import perfil from '../../assets/perfil2.jpg';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

type User = {
  name: string;
  username: string;
  photo: string | null;
};

const LeftSidebar = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token não encontrado. Redirecionando para login.');
        navigate('/home');
        return;
      }

      try {
        const response = await fetch(
          'https://matheusdevfullstack.pythonanywhere.com/auth/perfil/',
          // {
          // 'http://127.0.0.1:8000/auth/perfil/',
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        );

        if (!response.ok) {
          alert('Erro ao buscar os dados do usuário.');
          return;
        }

        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Erro ao buscar os dados do usuário:', error);
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <S.Sidebar>
      <S.Logo href="/home">
        <img src={logo} alt="" />
      </S.Logo>
      <S.Links>
        <S.Link href="/" rel="noopener noreferrer" id="selected">
          <i className="bi bi-house-door" />
          <p>Home</p>
        </S.Link>
        {/* <S.Link
          href="https://x.com/explore"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-search" />
          <p>Explore</p>
        </S.Link> */}
        {/* <S.Link
          href="https://x.com/notifications"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-bell" />
          <p>Notifications</p>
        </S.Link> */}
        {/* <S.Link
          href="https://x.com/messages"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-envelope" />
          <p>Messages</p>
        </S.Link> */}
        {/* <S.Link
          href="https://x.com/grok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-slash-circle" />
          <p>Grok</p>
        </S.Link> */}
        {/* <S.Link
          href="https://x.com/bookmarks"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-bookmark" />
          <p>Bookmarks</p>
        </S.Link> */}
        {/* <S.Link
          href="https://x.com/jobs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-briefcase" />
          <p>Jobs</p>
        </S.Link> */}
        {/* <S.Link
          href="https://x.com/communities"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-people" />
          <p>Communities</p>
        </S.Link> */}
        {/* <S.Link
          href="https://x.com/premium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-twitter-x" />
          <p>Premium</p>
        </S.Link> */}
        {/* <S.Link href="https://x.com/i/verified-orgs-signup">
          <i className="bi bi-lightning-charge" />
          <p>Verified Orgs</p>
        </S.Link> */}
        <S.Link href="/my-profile/" rel="noopener noreferrer">
          <i className="bi bi-person" />
          <p>Profile</p>
        </S.Link>
        {/* <S.Link href="https://x.com/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-three-dots" />
          <p>More</p>
        </S.Link> */}
      </S.Links>
      <S.PostButton to="/">Post</S.PostButton>
      <S.ProfileButton href="/my-profile">
        <S.ProfileImage src={user?.photo || 'perfil'} alt="" />
        {/* <S.ProfileImage src="perfil" alt="" /> */}
        <S.ProfileName>
          <p>{user?.name}</p>
          {/* <span>@MatheusOli2249</span> */}
          <span>{user?.username}</span>
        </S.ProfileName>
        <i className="bi bi-three-dots" />
      </S.ProfileButton>
    </S.Sidebar>
  );
};
export default LeftSidebar;
