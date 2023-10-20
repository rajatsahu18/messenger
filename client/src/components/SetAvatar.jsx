import React, { useEffect, useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { setAvatarRoute } from "../utils/apiRoutes";
import { Container } from "./styles/setAvatar";

export const SetAvatar = () => {
  
  const api = `https://api.multiavatar.com/4645646`;
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);
  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    const checkLocalStorage = async () => {
      try {
        const data = await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        );
        if (!data) {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error checking local storage:", error);
        navigate("/login");
      }
    };

    checkLocalStorage(); // Call the async function
  }, [navigate]);

  const setProfilePicture = async () => {
    if (selectedAvatar === undefined) {
      toast.error("Please select an avatar", toastOptions);
    } else {
      const user = await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      );

      const { data } = await axios.post(`${setAvatarRoute}/${user._id}`, {
        image: avatars[selectedAvatar],
      });

      if (data.isSet) {
        user.isAvatarImageSet = true;
        user.avatarImage = data.image;
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(user)
        );
        navigate("/");
      } else {
        toast.error("Error setting avatar. Please try again.", toastOptions);
      }
    }
  };

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const avatarPromises = Array.from({ length: 4 }, (_, index) =>
          axios.get(`${api}/${Math.round(Math.random() * 1000)}`)
        );

        const responses = await Promise.all(avatarPromises);

        const data = responses.map((response) => {
          const buffer = new Buffer(response.data);
          return buffer.toString("base64");
        });

        setAvatars(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching avatars:", error);
        setIsLoading(false);
      }
    };

    fetchAvatars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? (
        <Container>
          <img
            src={"https://acegif.com/wp-content/uploads/loading-38.gif"}
            alt="Spinner"
            className="Spinner"
          />
        </Container>
      ) : (
        <Container>
          <div className="title-container">
            <h1>Pick an Profile pic of your choice!</h1>
          </div>
          <div className="avatars">
            {avatars.map((avatar, index) => {
              return (
                <div
                  className={`avatar ${
                    selectedAvatar === index ? "selected" : ""
                  }`}
                >
                  <img
                    src={`data:image/svg+xml;base64,${avatar}`}
                    alt="avatar"
                    key={avatar}
                    onClick={() => setSelectedAvatar(index)}
                  />
                </div>
              );
            })}
          </div>
          <button onClick={setProfilePicture} className="submit-btn">
            Set as Profile Picture
          </button>
          <ToastContainer />
        </Container>
      )}
    </>
  );
}

