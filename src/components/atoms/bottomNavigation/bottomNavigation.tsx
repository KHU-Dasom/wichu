import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigationMui from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ChatIcon from "@mui/icons-material/Chat";
import LocationIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router";

export const BottomNavigation = ({ value }: { value: number }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigationMui
        showLabels
        value={value}
        onChange={(event, newValue) => {
          switch (newValue) {
            case 0:
              navigate("/");
              break;
            case 1:
              navigate("/chat");
          }
        }}
      >
        <BottomNavigationAction icon={<LocationIcon />} />
        <BottomNavigationAction icon={<ChatIcon />} />
      </BottomNavigationMui>
    </Box>
  );
};
