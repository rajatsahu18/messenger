import styled from "styled-components";
import whatsappbackgound from "../../assets/whatsappbackgound.jpg"

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  gap: 0.1rem;
  overflow: hidden;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 70% 15%;
  }
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avatar {
        img {
          border: 2px solid #00a884;
          border-radius: 50%;
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: #fff;
        }
      }
    }
  }
  .chat-messages {
    padding: 1rem 2rem;
    display: flex;

    background-image: url(${whatsappbackgound});

    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ff3300;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      align-items: center;
      .content {
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: #000;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          max-width: 70%;
        }
      }
    }
    .sended {
      justify-content: flex-end;
      .content {
        background-color: #d9fdd3;
      }
    }
    .recieved {
      justify-content: flex-start;
      .content {
        background-color: #fff;
      }
    }
  }
`;
