import * as S from './styles';
import logo from '../../assets/x-logo.jpg';
import perfil from '../../assets/perfil2.jpg';

const LeftSidebar = () => (
  <S.Sidebar>
    <S.Logo>
      <img src={logo} alt="" />
    </S.Logo>
    <S.Links>
      <S.Link id="selected">
        <i className="bi bi-house-door" />
        <p>Home</p>
      </S.Link>
      <S.Link>
        <i className="bi bi-search" />
        <p>Explore</p>
      </S.Link>
      <S.Link>
        <i className="bi bi-bell" />
        <p>Notifications</p>
      </S.Link>
      <S.Link>
        <i className="bi bi-envelope" />
        <p>Messages</p>
      </S.Link>
      <S.Link>
        <i className="bi bi-slash-circle" />
        <p>Grok</p>
      </S.Link>
      <S.Link>
        <i className="bi bi-bookmark" />
        <p>Bookmarks</p>
      </S.Link>
      <S.Link>
        <i className="bi bi-briefcase" />
        <p>Jobs</p>
      </S.Link>
      <S.Link>
        <i className="bi bi-people" />
        <p>Communities</p>
      </S.Link>
      <S.Link>
        <i className="bi bi-twitter-x" />
        <p>Premium</p>
      </S.Link>
      <S.Link>
        <i className="bi bi-lightning-charge" />
        <p>Verified Orgs</p>
      </S.Link>
      <S.Link>
        <i className="bi bi-person" />
        <p>Profile</p>
      </S.Link>
      <S.Link>
        <i className="bi bi-three-dots" />
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
      <i className="bi bi-three-dots" />
    </S.ProfileButton>
  </S.Sidebar>
);

export default LeftSidebar;
