import React from "react";
import {Route, Routes } from "react-router-dom";
import Main from "./../pages/Main";
import Login from "./../pages/Login";
import Navbar from "../components/Navbar";
import Register from './../pages/Register';

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<Register />} />
      </Routes>
    </>
  );
};

export default AppRouter;
