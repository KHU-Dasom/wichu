import {
  Stack,
  Card,
  CardActionArea,
  CardContent,
  Avatar,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Typography, Button } from "@mui/material";
import theme from "../../../styles/theme";
import { useNavigate } from "react-router";

export const StyledPartnerListPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  min-height: 100vh;
  height: auto;
`;

export const PartnerListPage = (): JSX.Element | null => {
  const navigate = useNavigate();

  const partners = [
    {
      name: "헬스조아",
      age: 30,
      gender: "FEMALE",
      imgSrc:
        "https://images.unsplash.com/photo-1614207339963-b4d237ff8f4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      name: "가짜사나이",
      age: 32,
      gender: "MALE",
      imgSrc:
        "https://images.unsplash.com/photo-1539538507524-eab6a4184604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];

  return (
    <StyledPartnerListPage>
      <Typography
        variant="h6"
        component="h1"
        sx={{
          paddingLeft: "10vw",
          fontWeight: 700,
          marginBottom: "1rem",
          paddingTop: "4rem",
          paddingBottom: "1rem",
          backgroundColor: theme.palette.primary.main,
          color: "white",
        }}
      >
        동행할 파트너를 선택하세요
      </Typography>
      <Stack spacing={2} sx={{ width: "90vw", margin: "0 auto" }}>
        {partners.map((partner, idx) => (
          <Card key={idx} sx={{ width: "100%" }}>
            <CardActionArea sx={{ display: "flex", padding: "1rem" }}>
              <Avatar
                sx={{ width: 50, height: 50, marginRight: "20px" }}
                src={partner.imgSrc}
                alt="partner"
              />
              <CardContent sx={{ width: "100%", padding: "0" }}>
                <Typography variant="h6" sx={{ fontWeight: "700" }}>
                  {partner.name}
                </Typography>
                <Typography>
                  {partner.age}세, {partner.gender === "MALE" ? "남성" : "여성"}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
      <Button
        variant="contained"
        sx={{
          width: "90vw",
          margin: "0 auto",
          height: "50px",
          marginTop: "auto",
          marginBottom: "1rem",
        }}
        onClick={() => navigate("/chatting")}
      >
        선택
      </Button>
    </StyledPartnerListPage>
  );
};
