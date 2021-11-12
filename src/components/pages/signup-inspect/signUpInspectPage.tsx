import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import {
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";

export const StyledSignUpInspectPage = styled(Container)``;

const LoadingTemplate = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress sx={{ width: "100px", height: "100px" }} />
      <Typography variant="body1" sx={{ marginTop: "1em" }}>
        AI가 사진을 분석하고 있어요
      </Typography>
    </Container>
  );
};

export const SignUpInspectPage = (): JSX.Element | null => {
  const navigate = useNavigate();
  const loading = false;

  if (loading) {
    return <LoadingTemplate />;
  }

  return (
    <StyledSignUpInspectPage
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "0",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1605923487072-a672d2189c72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
        alt=""
        style={{
          width: "100vw",
          height: "100vw",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          margin: "0 auto",
        }}
      />
      <Typography variant="h5" sx={{ margin: "1rem auto" }}>
        AI 심사 결과
      </Typography>
      <Card variant="outlined" sx={{ width: "90vw", margin: "0 auto" }}>
        <CardContent>
          <Typography variant="h6" mb="0.5rem" sx={{ fontWeight: "700" }}>
            25세, 여자
          </Typography>
          <Typography variant="body1">
            범죄기록 없음
            <Chip label="안전" color="success" sx={{ marginLeft: "1rem" }} />
          </Typography>
        </CardContent>
      </Card>
      <Button
        variant="contained"
        disableElevation
        sx={{
          width: "90vw",
          height: "50px",
          margin: "2rem auto 0",
          padding: "0.5rem",
        }}
        onClick={() => navigate("/")}
      >
        시작하기
      </Button>
    </StyledSignUpInspectPage>
  );
};
