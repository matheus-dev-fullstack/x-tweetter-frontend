import logo from '../../assets/logo.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';

import * as S from './styles';

const Footer = () => (
  <S.Footer>
    <img src={logo} alt="" />
    <S.Social>
      <a href="">
        <img src={instagram} alt="" />
      </a>

      <a href="">
        <img src={facebook} alt="" />
      </a>

      <a href="">
        <img src={twitter} alt="" />
      </a>
    </S.Social>
    <p>
      A Efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </S.Footer>
);

export default Footer;
