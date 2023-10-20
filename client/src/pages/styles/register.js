import styled from "styled-components";

export const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #00a884;

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
      border-radius: 50%;
    }
    h1 {
      color: #00a884;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #fff;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #00a884;
    border-radius: 0.4rem;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #29ad17;
      outline: none;
    }
  }
  button {
    background-color: #00a884;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    &:hover {
      background-color: #29ad17;
    }
  }
  span {
    text-align: center;
    color: #00a884;
    a {
      color: #00a884;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
