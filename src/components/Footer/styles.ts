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
