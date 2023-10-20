import React, { useState, useEffect } from "react";
import welcome from "../assets/welcome.gif";
import { Container } from "./styles/welcome";

export const Welcome = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const storeData = localStorage.getItem(
        process.env.REACT_APP_LOCALHOST_KEY
      );
      if (storeData) {
        const { userName } = JSON.parse(storeData);
        setUserName(userName);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <img src={welcome} alt="" />
      <h1>
        <span>Welcome {userName}!</span>
      </h1>
      <h3>Please select a chat to start messaging.</h3>
    </Container>
  );
};
