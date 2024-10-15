import * as S from './styles';
import logo from '../../assets/x-logo.jpg';
import { SecondaryButton } from '../LoginOptions/styles';
import perfil from '../../assets/perfil2.jpg';
import olhar from '../../assets/olhar.jpg';
import techtudo from '../../assets/techtudo.png';
import playstation from '../../assets/playstation.jpg';
import { Verified } from '../Posts/styles';

const TrendingsData = {
  trendings: [
    {
      context: 'Tranding in Brazil',
      title: 'Nubank',
      details: '3,960 posts'
    },
    {
      context: 'Entertainment · Trending',
      title: 'Brino',
      details: '6,117 posts'
    },
    {
      context: 'Tranding in Brazil',
      title: 'Caloteiro',
      details: '2,005 posts'
    },
    {
      context: 'Tranding in Brazil',
      title: 'Maçã',
      details: '10.9K posts'
    },
    {
      context: 'Tranding in Brazil',
      title: 'Alanis',
      details: '2,209 posts'
    }
  ]
};

const TopPages = {
  pages: [
    {
      name: 'PlayStation',
      username: '@PlayStation',
      fotoPerfil: playstation
    },
    {
      name: 'TechTudo',
      username: '@TechTudo',
      fotoPerfil: techtudo
    },
    {
      name: 'Olhar Digital',
      username: '@olhardigital',
      fotoPerfil: olhar
    }
  ]
};

const RightSidebar = () => (
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
        <S.Trending key={index}>
          <S.DetailTrending>{trending.context}</S.DetailTrending>
          <p>{trending.title}</p>
          <S.DetailTrending>{trending.details}</S.DetailTrending>
        </S.Trending>
      ))}

      <S.ShowMore>Show more</S.ShowMore>
    </S.Card>
    <S.Card>
      <S.Title>Who to follow</S.Title>
      {TopPages.pages.map((page, index) => (
        <S.ProfileButton key={index}>
          <S.ProfileImage src={page.fotoPerfil} alt="" />
          <S.ProfileName>
            <p>
              {page.name}
              <S.VerifiedPlus className="bi bi-patch-check-fill"></S.VerifiedPlus>
            </p>
            <span>{page.username}</span>
          </S.ProfileName>
          <S.Button to="/feed">Follow</S.Button>
        </S.ProfileButton>
      ))}

      <S.ShowMore>Show more</S.ShowMore>
    </S.Card>
    <S.Terms>
      <a href="/feed">Terms od Service</a>
      <a href="/feed">Privacy Policy</a>
      <a href="/feed">Cookie Policy</a>
      <a href="/feed">Accessibility</a>
      <a href="/feed">Ads info</a>
      <a href="/feed">More...</a>
      <a href="/feed">© 2024 X Corp.</a>
    </S.Terms>
  </S.Sidebar>
);

export default RightSidebar;
