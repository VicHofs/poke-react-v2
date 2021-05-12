import styled from 'styled-components';

export const Container = styled.div`
  user-select: none;
  background-color: #141414;
  color: #ffffff;
  height: 150px;
  display: flex;
  place-content: center;
  place-items: center;

  p {
    margin: 0 10px;
    text-align: center;
    z-index: 10;
  }

  a {
    text-decoration: none;
    color: #ffffff;
    position: relative;
    transition: all 300ms cubic-bezier(0.16, 0.79, 0.58, 0.97);
  }

  a:before {
    content: '「';
    position: absolute;
    left: 0;
    transform: translate(-90%, -10px) scaleX(0.8);
    visibility: hidden;
    transition: all 300ms cubic-bezier(0.16, 0.79, 0.58, 0.97);
    opacity: 0;
  }

  a:after {
    content: '」';
    position: absolute;
    right: 0;
    transform: translate(70%, 13px) scaleX(0.8);
    visibility: hidden;
    transition: all 300ms cubic-bezier(0.16, 0.79, 0.58, 0.97);
    opacity: 0;
  }

  a:hover {
    margin: 0 10px;
  }

  a:hover:before {
    visibility: visible;
    transform: translate(-90%, 0) scale(0.8, 0.6);
    opacity: 1;
  }

  a:hover:after {
    visibility: visible;
    transform: translate(70%, 3px) scale(0.8, 0.6);
    opacity: 1;
  }

  img {
    user-select: none;
    -webkit-user-drag: none;
  }

  img.bg {
    position: absolute;
    height: 120px;
    opacity: 0.05;
  }

  img.icon {
    height: 23px;
    transform: translateY(7px);
    margin: 0 2px;
  }

  @media (max-width: 486px) {
    font-size: 20px;

    img.icon {
      height: 20px;
      transform: translateY(6px);
      margin: 0 1px;
    }
  }
`;
