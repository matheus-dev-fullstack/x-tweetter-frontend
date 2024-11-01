import Header from '../../components/Header';
import LeftSidebar from '../../components/LeftSidebar';
import Posts from '../../components/Posts';
import RightSidebar from '../../components/RightSidebar';
import { Container } from './styles';

const Feed = () => {
  return (
    <Container className="container d-flex justify-content-between">
      <LeftSidebar />
      <Posts />
      <RightSidebar />
    </Container>
  );
};
export default Feed;
