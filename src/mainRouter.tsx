import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/pages/home/homePage";
import { SignUpPage } from "./components/pages/signup/signUpPage";
import { SignInPage } from "./components/pages/signin/signInPage";
import { SignUpInspectPage } from "./components/pages/signup-inspect/signUpInspectPage";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup/inspect" element={<SignUpInspectPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  );
};
