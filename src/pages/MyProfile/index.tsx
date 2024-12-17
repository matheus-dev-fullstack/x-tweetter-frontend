import Header from '../../components/Header';
import LeftSidebar from '../../components/LeftSidebar';
import PerfilDetail from '../../components/PerfilDetail';
import RightSidebar from '../../components/RightSidebar';
import { Container } from './styles';

const MyProfile = () => {
  return (
    <Container className="container d-flex justify-content-between">
      <LeftSidebar />
      <PerfilDetail />
      <RightSidebar />
    </Container>
  );
};
export default MyProfile;
