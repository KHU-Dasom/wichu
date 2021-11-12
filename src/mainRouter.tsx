import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/pages/home/homePage";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
