import styled, { keyframes } from 'styled-components';

interface ContainerProps {
  typeName: string;
}

interface ColorMap {
  [key: string]: string;
}

const colorMap: ColorMap = {
  bug: '#90C12C',
  dark: '#5A5366',
  dragon: '#0A6DC4',
  electric: '#F3D23B',
  fairy: '#EC8FE6',
  fighting: '#CE4069',
  fire: '#FF9C54',
  flying: '#8FA8DD',
  ghost: '#5269AC',
  grass: '#63BB5B',
  ground: '#D97746',
  ice: '#74CEC0',
  normal: '#9099A2',
  poison: '#AB6AC8',
  psychic: '#F97176',
  rock: '#C7B78B',
  steel: '#5A8EA1',
  water: '#4D90D5',
};

const bounceInBottom = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -3px);
  }

  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

export const Container = styled.span<ContainerProps>`
  height: 22px;
  width: 22px;
  position: relative;

  img {
    height: 22px;
    width: 22px;
  }

  &&:hover:after {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${bounceInBottom} 300ms cubic-bezier(0.16, 0.79, 0.58, 0.97);
    z-index: 10;

    content: '${({ typeName }) => `${typeName}`}';
    display: flex;
    padding: 5px;
    padding-top: 0;
    padding-bottom: 4px;
    align-content: center;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;
    border-radius: 5px;
    font-size: 22px;
    background-color: ${({ typeName }) => colorMap[typeName]};
  }
`;

export default Container;
