import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/pages/home/homePage";
import { SignUpPage } from "./components/pages/signup/signUpPage";
import { SignInPage } from "./components/pages/signin/signInPage";
import { SignUpInspectPage } from "./components/pages/signup-inspect/signUpInspectPage";
import { PartnerListPage } from "./components/pages/partner-list/partnerListPage";
import { RatingPage } from "./components/pages/rating/ratingPage";
import { ChattingPage } from "./components/pages/chatting/chattingPage";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup/inspect" element={<SignUpInspectPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/partner-list" element={<PartnerListPage />} />
      <Route path="/rating" element={<RatingPage />} />
      <Route path="/chatting" element={<ChattingPage />} />
    </Routes>
  );
};
