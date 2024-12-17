import Header from '../../components/Header';
import LeftSidebar from '../../components/LeftSidebar';
import PerfilOverview from '../../components/PerfilOverview';
import RightSidebar from '../../components/RightSidebar';
import { Container } from './styles';

const Profile = () => {
  return (
    <Container className="container d-flex justify-content-between">
      <LeftSidebar />
      <PerfilOverview />
      <RightSidebar />
    </Container>
  );
};
export default Profile;
