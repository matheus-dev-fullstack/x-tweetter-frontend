import * as S from './styles';
import logo from '../../assets/x-logo.jpg';

const Header = () => (
  <S.Header>
    <div className="container">
      <S.LeftDiv>
        <img src={logo} alt="" />
      </S.LeftDiv>
      <S.MiddleDiv>
        <S.Button>For You</S.Button>
        <S.Button>Following</S.Button>
      </S.MiddleDiv>
      <S.RightDiv>
        <S.Search>
          <S.SearchButton>
            <S.Icon className="bi bi-search" />
          </S.SearchButton>
          <S.Input type="text" placeholder="Search" />
        </S.Search>
      </S.RightDiv>
    </div>
  </S.Header>
);

export default Header;
