import * as S from './styles';
import logo from '../../assets/x-logo.jpg';
import { SecondaryButton } from '../LoginOptions/styles';
import perfil from '../../assets/perfil2.jpg';

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
      <S.Trending>
        <S.DetailTrending>Tranding in Brazil</S.DetailTrending>
        <p>Alef Manga</p>
        <S.DetailTrending>
          Trending with <S.Location>Coritiba</S.Location>,{' '}
          <S.Location>Amazonas</S.Location>
        </S.DetailTrending>
      </S.Trending>
      <S.Trending>
        <S.DetailTrending>Tranding in Brazil</S.DetailTrending>
        <p>Alef Manga</p>
        <S.DetailTrending>
          Trending with <S.Location>Coritiba</S.Location>,{' '}
          <S.Location>Amazonas</S.Location>
        </S.DetailTrending>
      </S.Trending>
      <S.Trending>
        <S.DetailTrending>Tranding in Brazil</S.DetailTrending>
        <p>Alef Manga</p>
        <S.DetailTrending>
          Trending with <S.Location>Coritiba</S.Location>,{' '}
          <S.Location>Amazonas</S.Location>
        </S.DetailTrending>
      </S.Trending>
      <S.Trending>
        <S.DetailTrending>Tranding in Brazil</S.DetailTrending>
        <p>Alef Manga</p>
        <S.DetailTrending>
          Trending with <S.Location>Coritiba</S.Location>,{' '}
          <S.Location>Amazonas</S.Location>
        </S.DetailTrending>
      </S.Trending>
      <S.Trending>
        <S.DetailTrending>Tranding in Brazil</S.DetailTrending>
        <p>Alef Manga</p>
        <S.DetailTrending>
          Trending with <S.Location>Coritiba</S.Location>,{' '}
          <S.Location>Amazonas</S.Location>
        </S.DetailTrending>
      </S.Trending>
      <S.ShowMore>Show more</S.ShowMore>
    </S.Card>
    <S.Card>
      <S.Title>Who to follow</S.Title>
      <S.ProfileButton>
        <S.ProfileImage src={perfil} alt="" />
        <S.ProfileName>
          <p>Matheus Oliveira</p>
          <span>@MatheusOli2249</span>
        </S.ProfileName>
        <S.Button to="/feed">Follow</S.Button>
      </S.ProfileButton>
      <S.ProfileButton>
        <S.ProfileImage src={perfil} alt="" />
        <S.ProfileName>
          <p>Matheus Oliveira</p>
          <span>@MatheusOli2249</span>
        </S.ProfileName>
        <S.Button to="/feed">Follow</S.Button>
      </S.ProfileButton>
      <S.ProfileButton>
        <S.ProfileImage src={perfil} alt="" />
        <S.ProfileName>
          <p>Matheus Oliveira</p>
          <span>@MatheusOli2249</span>
        </S.ProfileName>
        <S.Button to="/feed">Follow</S.Button>
      </S.ProfileButton>
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
