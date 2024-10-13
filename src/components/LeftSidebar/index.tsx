import * as S from './styles';
import logo from '../../assets/x-logo.jpg';
import { SecondaryButton } from '../LoginOptions/styles';
import perfil from '../../assets/perfil2.jpg';

const LeftSidebar = () => (
  <S.Sidebar>
    <S.Logo>
      <img src={logo} alt="" />
    </S.Logo>
    <S.Links>
      <S.Link id="selected">
        <i className="bi bi-search" />
        <p>Home</p>
      </S.Link>
      <S.Link>
        <i className="bi bi-search" />
        <p>Explore</p>
      </S.Link>
      <S.Link>
        <i className="bi bi-search" />
        <p>Notifications</p>
      </S.Link>
      <S.Link>
        <i className="bi bi-search" />
        <p>Messages</p>
      </S.Link>
      <S.Link>
        <i className="bi bi-search" />
        <p>Grok</p>
      </S.Link>
      <S.Link>
        <i className="bi bi-search" />
        <p>Bookmarks</p>
      </S.Link>
      <S.Link>
        <i className="bi bi-search" />
        <p>Jobs</p>
      </S.Link>
      <S.Link>
        <i className="bi bi-search" />
        <p>Communities</p>
      </S.Link>
      <S.Link>
        <i className="bi bi-search" />
        <p>Premium</p>
      </S.Link>
      <S.Link>
        <i className="bi bi-search" />
        <p>Verified Orgs</p>
      </S.Link>
      <S.Link>
        <i className="bi bi-search" />
        <p>Profile</p>
      </S.Link>
      <S.Link>
        <i className="bi bi-search" />
        <p>More</p>
      </S.Link>
    </S.Links>
    <S.PostButton to="/">Post</S.PostButton>
    <S.ProfileButton>
      <S.ProfileImage src={perfil} alt="" />
      <S.ProfileName>
        <p>Matheus Oliveira</p>
        <span>@MatheusOli2249</span>
      </S.ProfileName>
      <i className="bi bi-search" />
    </S.ProfileButton>
  </S.Sidebar>
);

export default LeftSidebar;
