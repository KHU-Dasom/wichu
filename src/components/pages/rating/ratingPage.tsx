import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export const StyledRatingPage = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

export const RatingPage = (): JSX.Element | null => {
  const navigate = useNavigate();

  const partner = {
    name: "헬스조아",
    age: 30,
    gender: "FEMALE",
    imgSrc:
      "https://images.unsplash.com/photo-1614207339963-b4d237ff8f4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  };

  return (
    <StyledRatingPage>
      <Typography
        variant="h6"
        component="h1"
        sx={{
          paddingLeft: "10vw",
          fontWeight: 700,
          paddingTop: "4rem",
          paddingBottom: "1rem",
          backgroundColor: theme.palette.primary.main,
          color: "white",
        }}
      >
        동행 경험은 어떠셨나요?
      </Typography>
      <Card sx={{ width: "90vw", margin: "2rem auto", paddingBottom: "1rem" }}>
        <CardContent sx={{ display: "flex", padding: "1rem" }}>
          <Avatar
            sx={{ width: 50, height: 50, marginRight: "20px" }}
            src={partner.imgSrc}
            alt="partner"
          />
          <CardContent sx={{ width: "100%" }} style={{ padding: 0 }}>
            <Typography variant="h6" sx={{ fontWeight: "700" }}>
              {partner.name}
            </Typography>
            <Typography>
              {partner.age}세, {partner.gender === "MALE" ? "남성" : "여성"}
            </Typography>
          </CardContent>
        </CardContent>
        <Rating value={4.5} precision={0.5} sx={{ padding: "0 1rem" }} />
      </Card>
      <Button
        variant="contained"
        sx={{
          width: "90vw",
          margin: "0 auto",
          height: "50px",
          marginTop: "auto",
          marginBottom: "1rem",
        }}
        onClick={() => navigate("/")}
      >
        평가 완료
      </Button>
    </StyledRatingPage>
  );
};
