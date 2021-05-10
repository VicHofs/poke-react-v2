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
        by&nbsp;
        <a
          href="https://www.github.com/vichofs"
          target="_blank"
          rel="noreferrer"
        >
          Victor B. Hofstetter
        </a>
        &nbsp;and&nbsp;
        <a href="https://www.github.com/hv90" target="_blank" rel="noreferrer">
          Hugo Almeida
        </a>
        &nbsp;at Hicom IT
      </p>
      <img src={Pokeball} alt="" className="bg" />
    </Container>
  );
};

export default Footer;
