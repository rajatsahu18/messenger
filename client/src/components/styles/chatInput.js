import styled from "styled-components";

export const Container = styled.div`
display: grid;
align-items: center;
grid-template-columns: 100%;
padding: 0 2px;
@media screen and (min-width: 720px) and (max-width: 1080px) {
  padding: 0 1rem;
  gap: 0.1rem;
   }
  }
}
.input-container {
  // border:1px solid blue;
  display: flex;
  // align-items: center;
  gap: 2rem;
  
  textarea {
    border: none;
    border-radius: 30px;
    width: 100%;
    padding: 15px 0 0 15px;
    margin-left: 1rem;
    &:focus {
      outline: none;
    }
  }
  button {
    border: none;
    padding: 0.3rem 2rem;
    margin-right: 1rem;
    border-radius: 2rem;
    display: flex;
    background-color: #00A884;
    cursor: pointer;

    @media screen and (min-width: 720px) and (max-width: 1080px) {
      padding: 0.3rem 1rem;
      svg {
        font-size: 1rem;
      }
    }
    svg {
      font-size: 2rem;
      color: #fff;
    }
  }
}
`;
