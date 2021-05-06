import styled from 'styled-components';

export const Container = styled.div`
  height: 90px;
  display: flex;
  place-content: center;
  place-items: center;
  padding: 10px 0px;
  border-bottom: 10px solid #a30000;

  background-color: #cc0000;
  margin-bottom: 30px;

  img {
    max-width: 70vw;
    max-height: 165vw;

    user-drag: none;
    user-select-none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  @media (min-width: 400px) {
    height: 120px;
  }
`;
