import React from "react";
import styled from "styled-components";
import {
  Container,
  TextField,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router";

const StyledSignUpPage = styled(Container)`
  padding: 50px 20px;
`;

const PhotoAddButton = styled(IconButton)``;

const StyledTextField = styled(TextField).attrs({
  sx: {
    margin: "0.5rem 0",
  },
})`
  width: 100%;

  input {
    padding: 1rem;
  }
`;

const StyledButton = styled(Button)`
  && {
    margin-top: 60px;
    width: 100%;
    height: 50px;
  }
`;

export const SignUpPage = (): JSX.Element | null => {
  const navigate = useNavigate();

  return (
    <StyledSignUpPage
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PhotoAddButton
        size="large"
        sx={{
          width: "150px",
          height: "150px",
          border: "1px solid grey",
          borderRadius: "10%",
          margin: "0 auto 1rem",
        }}
      >
        <AddIcon />
      </PhotoAddButton>
      <StyledTextField label="아이디" variant="outlined" />
      <StyledTextField label="비밀번호" type="password" variant="outlined" />
      <StyledTextField
        label="비밀번호 확인"
        type="password"
        variant="outlined"
      />
      <StyledTextField label="휴대폰 번호" variant="outlined" />
      <StyledButton
        variant="contained"
        onClick={() => {
          navigate("/signup/inspect");
        }}
      >
        AI 심사 시작하기
      </StyledButton>
    </StyledSignUpPage>
  );
};
