import React, { useState, useEffect } from "react";
import whatsapp from "../assets/whatsapp.png";
import { Logout } from "./Logout";
import { Container } from "./styles/contacts";

export const Contacts = ({ contacts, changeChat }) => {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const data = await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      );
      if (data && data.username && data.avatarImage) {
        setCurrentUserName(data.username);
        setCurrentUserImage(data.avatarImage);
      }
    };

    fetchData();
  }, []);

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <>
      {currentUserImage && currentUserImage && (
        <Container>
          <div className="brand">
            <img src={whatsapp} alt="whatsapp" />
            <h3>Messenger</h3>
          </div>
          <div className="contacts">
            {contacts?.map((contact, index) => {
              return (
                <div
                  key={contact._id}
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt=""
                    />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="current-user">
            <div className="user-details">
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
              <h2>{currentUserName}</h2>
            </div>
            <div>
              <Logout />
            </div>
          </div>
        </Container>
      )}
    </>
  );
};
