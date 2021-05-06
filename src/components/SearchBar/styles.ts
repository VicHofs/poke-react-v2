import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.details}60;
  border-radius: 50px;
  height: 50px;
  width: 400px;
  max-width: 70vw;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6vh;
  transition: all 300ms ease-out;

  &&:focus-within {
    border: 2px solid ${({ theme }) => theme.colors.details};

    .searchIcon {
      color: ${({ theme }) => theme.colors.details};
    }

    .searchBox {
      color: ${({ theme }) => theme.colors.details};
    }
  }

  .searchBox {
    background-color: ${({ theme }) => theme.colors.bg}00;
    border: none;
    height: 100%;
    width: 100%;
    padding: 0px 15px 4.5px;
    border-radius: 50px;
    font-size: 33px;
    font-family: 'FireRed', sans-serif;
    color: ${({ theme }) => theme.colors.details}80;
    transition: all 300ms ease-out;
  }

  .searchBox:focus {
    outline: none;
  }

  .searchBox::placeholder {
    color: ${({ theme }) => theme.colors.details}70;
  }

  .searchIcon {
    color: ${({ theme }) => theme.colors.details}60;
    height: 80%;
    width: 10%;
    margin-top: 2.5px;
    margin-right: 15px;
    margin-left: 10px;
    transition: all 300ms ease-out;
  }

  .searchIcon:hover {
    cursor: pointer;
  }
`;
