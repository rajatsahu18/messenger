import React from "react";
import { Route, Routes } from "react-router-dom";
import { Chat, Login, Register } from "./pages";
import { SetAvatar } from "./components";

export default function App() {
  return (
    <>
    {/* <VideoContainer /> */}
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/setAvatar" element={<SetAvatar />} />
      <Route path="/" element={<Chat />} />
    </Routes>
    </>
  );
}
