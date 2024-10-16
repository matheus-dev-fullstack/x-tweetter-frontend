import * as S from './styles';
import logo from '../../assets/x-logo.jpg';
import { SecondaryButton } from '../LoginOptions/styles';
import perfil from '../../assets/perfil2.jpg';
import dog from '../../assets/dog-samurai.jpg';
import dolangue from '../../assets/dolangue.png';
import dolanguepost from '../../assets/dolangue-post.png';
import cesar from '../../assets/cesar.jpg';
import cesarpost from '../../assets/cesar-post.jpg';

const postsData = {
  posts: [
    {
      user: {
        name: 'Dolangue News',
        username: '@DolangueNews',
        profileImage: dolangue,
        verified: true
      },
      content: {
        text: 'URGENTE: já é quase amanhã',
        image: dolanguepost
      },
      interactions: {
        likes: 255,
        comments: 255
      }
    },
    {
      user: {
        name: 'Cesar Menotti',
        username: '@CesarMenotti',
        profileImage: cesar,
        verified: false
      },
      content: {
        text: 'Se não for com paixão, eu nem faço ❤️',
        image: cesarpost
      },
      interactions: {
        likes: 120,
        comments: 50
      }
    },
    {
      user: {
        name: 'João Silva',
        username: '@JoaoSilva22',
        profileImage: perfil,
        verified: false
      },
      content: {
        text: 'Novo post sobre programação e tecnologia! Confira no meu blog.',
        image: dog
      },
      interactions: {
        likes: 120,
        comments: 50
      }
    }
  ]
};

const Posts = () => (
  <S.Container>
    <S.Header>
      <S.Button>For You</S.Button>
      <S.Button>Following</S.Button>
    </S.Header>
    <S.PostList>
      {postsData.posts.map((post, index) => (
        <S.Post key={index}>
          <S.ProfileButton>
            <S.ProfileImage src={post.user.profileImage} alt={post.user.name} />
            <S.Row>
              <S.ProfileName>
                <p>{post.user.name}</p>
                <S.Verified className="bi bi-patch-check-fill"></S.Verified>{' '}
                <span>{post.user.username}</span>
                <S.More className="bi bi-three-dots" />
              </S.ProfileName>
              <S.TweetText>{post.content.text}</S.TweetText>
              {post.content.image && (
                <S.ImageDiv>
                  <img src={post.content.image} alt="Post Content" />
                </S.ImageDiv>
              )}
              <S.Actions>
                <button>
                  <i className="bi bi-heart"></i>
                  <span>{post.interactions.likes}</span>
                </button>
                <button>
                  <i className="bi bi-chat"></i>
                  <span>{post.interactions.comments}</span>
                </button>
              </S.Actions>
            </S.Row>
          </S.ProfileButton>
        </S.Post>
      ))}
    </S.PostList>
  </S.Container>
);

export default Posts;
