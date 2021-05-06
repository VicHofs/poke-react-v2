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
  box-shadow: 0px 8px 10px rgba(29, 29, 29, 0.699);
  max-width: 50vw;
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
`;

export const SpriteContainer = styled.div`
  position: relative;
  place-content: center;
  p {
    position: absolute;
    color: ${({ theme }) => theme.colors.details};
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
`;
