import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #00a884;
  .box {
    height: 95vh;
    width: 99vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 20% 80%;

    border-radius: 15px;

    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
