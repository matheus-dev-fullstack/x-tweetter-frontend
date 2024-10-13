import * as S from './styles';
import logo from '../../assets/x-logo.jpg';
import { SecondaryButton } from '../LoginOptions/styles';
import perfil from '../../assets/perfil2.jpg';

const RightSidebar = () => (
  <S.Sidebar>
    <S.RightDiv>
      <S.Search>
        <S.SearchButton>
          <S.Icon className="bi bi-search" />
        </S.SearchButton>
        <S.Input type="text" placeholder="Search" />
      </S.Search>
    </S.RightDiv>
  </S.Sidebar>
);

export default RightSidebar;
