import * as S from './styles';
import logo from '../../assets/x-logo.jpg';
import { SecondaryButton } from '../LoginOptions/styles';
import perfil from '../../assets/perfil2.jpg';
import olhar from '../../assets/olhar.jpg';
import techtudo from '../../assets/techtudo.png';
import { Verified } from '../Posts/styles';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type Perfil = {
  name: string;
  username: string;
  photo: string;
  banner: string;
  followers_count: number;
  following_count: number;
};

const TrendingsData = {
  trendings: [
    {
      context: 'Tranding in Brazil',
      title: 'Nubank',
      details: '3,960 posts',
      link: 'https://x.com/Nubank'
    },
    {
      context: 'Entertainment · Trending',
      title: 'Brino',
      details: '6,117 posts',
      link: 'https://x.com/Brino'
    },
    {
      context: 'Tranding in Brazil',
      title: 'Caloteiro',
      details: '2,005 posts',
      link: 'https://x.com/Caloteiro'
    }
  ]
};

const TopPages = {
  pages: [
    {
      name: 'Matheus Oliveira',
      username: '@MatheusOliveira',
      fotoPerfil: '/media/perfilPhoto/eu.JPG',
      link: 'https://x.com/playstation'
    }
  ]
};

const RightSidebar = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [topPage, setTopPage] = useState<Perfil | null>(null);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const fetchPerfil = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/home');
        return;
      }

      try {
        const response = await fetch(
          `http://127.0.0.1:8000/auth/perfil/overview/@MatheusOliveira/`,
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
            navigate('/home');
            return;
          }
        }
        const author = await response.json();
        console.log(author);
        setTopPage(author);
      } catch (err) {
        console.log(err);
        console.error('Erro de rede:', err);
        setError('Erro ao carregar o perfil.');
      }
    };
    fetchPerfil();
  }, [navigate]);

  const handleFollow = async (id: any, event: React.MouseEvent) => {
    event.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/auth/perfil/${id}/follow/`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.ok) {
        alert(`Agora você está seguindo`);
        setIsFollowing(true);
      } else {
        alert('Erro ao seguir o usuário');
      }
    } catch (error) {
      alert('Erro na requisição de follow:');
    }
  };

  return (
    <S.Sidebar>
      <S.Search>
        <S.SearchButton>
          <S.Icon className="bi bi-search" />
        </S.SearchButton>
        <S.Input type="text" placeholder="Search" />
      </S.Search>
      <S.Card>
        <S.Title>What&apos;s happening</S.Title>
        {TrendingsData.trendings.map((trending, index) => (
          <S.Trending
            href={trending.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <S.DetailTrending>{trending.context}</S.DetailTrending>
            <p>{trending.title}</p>
            <S.DetailTrending>{trending.details}</S.DetailTrending>
          </S.Trending>
        ))}

        <S.ShowMore>Show more</S.ShowMore>
      </S.Card>
      <S.Card>
        <S.Title>Who to follow</S.Title>
        <S.ProfileButton
          href="/profile/@MatheusOliveira/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.ProfileImage src={topPage?.photo} alt="" />
          <S.ProfileName>
            <p>
              {topPage?.name}
              <S.VerifiedPlus className="bi bi-patch-check-fill"></S.VerifiedPlus>
            </p>
            <span>{topPage?.username}</span>
          </S.ProfileName>
          <S.Button
            onClick={(event) => handleFollow(7, event)}
            // isFollowing={isFollowing}
          >
            Follow
          </S.Button>
        </S.ProfileButton>

        {/* <S.ShowMore>Show more</S.ShowMore> */}
      </S.Card>
      <S.Terms>
        <a href="/">Terms od Service</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Cookie Policy</a>
        <a href="/">Accessibility</a>
        <a href="/">Ads info</a>
        <a href="/">More...</a>
        <a href="/">© 2024 X Corp.</a>
      </S.Terms>
    </S.Sidebar>
  );
};
export default RightSidebar;
