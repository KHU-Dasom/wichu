import React from "react";
import Chat from "../../Chat";
import { BottomNavigation } from "../../atoms/bottomNavigation/bottomNavigation";

export const ChattingPage = (): JSX.Element | null => {
  return (
    <>
      <Chat />
      <BottomNavigation value={1} />
    </>
  );
};
