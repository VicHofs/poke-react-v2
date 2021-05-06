import styled, { keyframes } from 'styled-components';

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

export const NoResultCard = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  font-family: 'FireRed', sans-serif;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.details};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.bg};
  box-shadow: 0px 8px 10px rgba(29, 29, 29, 0.699);
  max-width: 50vw;
  min-height: 150px;
  // height: 150px;
  padding: 10px 20px;

  h1 {
    font-weight: normal;
  }

  select {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export const LoaderContainer = styled.div`
  .spinner {
    width: 50px;
    height: 50px;
    animation: 0.65s loader infinite ease-in-out;
  }

  @keyframes loader {
    from {
      transform: rotate(19deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const ThemeContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  width: 50px;
  margin-left: 20px;
  border-radius: 100px;
  align-items: center;
  opacity: 0.95;
  background-color: ${({ theme }) => theme.colors.lightContrast}30;
  box-shadow: 0px 8px 10px
    rgba(
      29,
      29,
      29,
      ${({ theme }) => (theme.title === 'dark' ? '0.699' : '0.4')}
    );
  transition: all 200ms ease-out;
  transform: scale(1);

  :hover {
    opacity: 1;
    cursor: pointer;
    box-shadow: 0px 8px 10px
      rgba(
        29,
        29,
        29,
        ${({ theme }) => (theme.title === 'dark' ? '0.4' : '0.2')}
      );
    transform: scale(1.02);
  }

  :after {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translate(-50%, -50%);

    content: '${({ theme }) => {
      return theme.title === 'dark' ? 'light' : 'dark';
    }} mode';
    width: max-content;
    display: flex;
    padding: 5px;
    padding-top: 0;
    padding-bottom: 4px;
    align-content: center;
    text-align: center;
    vertical-align: middle;
    border-radius: 5px;
    font-size: 22px;
    background-color: ${({ theme }) => theme.colors.lightContrast}70;
    visibility: hidden;
  }

  :hover:after {
    animation: ${bounceInBottom} 300ms cubic-bezier(0.16, 0.79, 0.58, 0.97);
    visibility: visible;
  }

  img {
    height: 50%;
    width: 50%;
  }

  .dark {
    height: 40%;
    width: 40%;
  }

  @media (max-width: 560px) {
    margin-left: 15px;
  }
`;
