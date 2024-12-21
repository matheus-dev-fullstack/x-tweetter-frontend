import LeftSidebar from '../../components/LeftSidebar';
import PostsFollowing from '../../components/PostsFollowing';
import RightSidebar from '../../components/RightSidebar';
import { Container } from './styles';

const FeedFollowing = () => {
  return (
    <Container className="container d-flex justify-content-between">
      <LeftSidebar />
      <PostsFollowing />
      <RightSidebar />
    </Container>
  );
};
export default FeedFollowing;
