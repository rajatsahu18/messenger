import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Register } from './Register';
import { Login } from './Login';
import { SetAvatar } from '../components';
import { Chat } from './Chat';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/setAvatar" element={<SetAvatar />} />
      <Route path="/" element={<Chat />} />
    </Routes>
  )
}
