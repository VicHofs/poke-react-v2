import React from 'react';
import Heart from 'assets/images/icons/heart.png';
import Pokeball from 'assets/images/pokeball.png';
import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <p>
        Made with
        <img src={Heart} alt="love" className="icon" />
        by Victor B. Hofstetter and Hugo Almeida at Hicom IT
      </p>
      <img src={Pokeball} alt="" className="bg" />
    </Container>
  );
};

export default Footer;
