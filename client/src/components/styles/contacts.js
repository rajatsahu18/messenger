import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color: #fff;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 2rem;
      background-color: #fff;
      border-radius: 50%;
    }
    h3 {
      color: #00a884;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      min-height: 4rem;
      cursor: pointer;
      width: 90%;
      // border: 1px solid #00000076;
      border-radius: 10px;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          border: 2px solid #00000076;
          border-radius: 50%;
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: #000;
        }
      }
    }
    .selected {
      background-color: #00000076;
      border: none;
      color: #fff;
      .avatar {
        img {
          border: 2px solid white;
          border-radius: 50%;
        }
      }
      .username {
        h3 {
          color: #fff;
        }
      }
    }
  }

  .current-user {
    // height: 4rem;
    background-color: #00000076;
    display: flex;
    margin: 20px 20px 10px 20px;
    padding: 15px;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;

    .user-details {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      img {
        border: 2px solid #fff;
        border-radius: 50%;
        height: 3rem;
        max-inline-size: 100%;
      }
      h2 {
        color: #fff;
        margin-left: 1rem;
      }
    }

    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .user-details {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;
