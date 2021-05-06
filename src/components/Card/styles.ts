import styled from 'styled-components';
import { Save } from '@styled-icons/heroicons-solid';
import { RemoveCircle } from '@styled-icons/ionicons-solid';

export const SaveIcon = styled(Save)`
  color: ${({ theme }) => theme.colors.text};
`;

export const RemoveIcon = styled(RemoveCircle)`
  color: ${({ theme }) => theme.colors.text};
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  transition: all 500ms ease-out;
  overflow: visible;
  margin-bottom: 25px;

  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.bg};
  border: 2px solid ${({ theme }) => theme.colors.lightContrast}30;
  box-shadow: 0px 8px 10px
    rgba(
      29,
      29,
      29,
      ${({ theme }) => (theme.title === 'dark' ? '0.699' : '0.3')}
    );
  max-width: 50vw;
  width: 900px;
  min-height: 150px;
  // height: 150px;
  padding: 10px 20px;

  h1 {
    font-weight: normal;
  }

  .sprite {
    // transform: scale(1.3);
    margin-right: 20px;
  }

  select {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  svg {
    position: absolute;
    left: 94%;
    transform: translateX(150%);
    opacity: 0.1;
    transition: 100ms all ease-out;
  }

  svg:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  @media (max-width: 1060px) {
    height: 400px;
    width: 300px;
    max-width: 90vw;

    flex-direction: column-reverse;
    justify-content: space-between;

    select {
      // display: none;
      position: relative;
      margin-left: 20px;
    }
    svg {
      position: absolute;
      left: 80%;
      bottom: 2px;
      transform: none;
      height: 40px;
    }
  }
`;

export const SpriteContainer = styled.div`
  position: relative;
  p.number {
    position: absolute;
    color: ${({ theme }) => theme.colors.details};
  }

  p.mobileDescription {
    display: none;
  }

  @media (max-width: 1060px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 65%;
    transform: translateY(-20px);

    img.sprite {
      margin: 0;
      width: 80%;
    }

    p.mobileDescription {
      display: initial;
    }
  }
`;

export const PokeData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;

  h1 {
    font-size: 4rem;
    margin-bottom: 5px;
    text-transform: uppercase;

    span {
      margin-left: 5px;
    }
  }

  p {
    font-size: 2.6rem;
  }

  @media (max-width: 1060px) {
    p {
      display: none;
    }

    height: min-content;
  }
`;
