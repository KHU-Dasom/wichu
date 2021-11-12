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
import { useState, useRef } from "react";
import { authorizationState } from "../../../recoil/atoms";
import { useRecoilState } from "recoil";

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

  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const [authorization, setAuthorization] = useRecoilState(authorizationState);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
        onClick={() => {
          hiddenFileInput.current?.click();
        }}
      >
        <AddIcon />
      </PhotoAddButton>
      <StyledTextField
        label="아이디"
        variant="outlined"
        value={id}
        onChange={(evt) => {
          setId(evt.target.value);
        }}
      />
      <StyledTextField
        label="비밀번호"
        type="password"
        variant="outlined"
        value={password}
        onChange={(evt) => {
          setPassword(evt.target.value);
        }}
      />
      <StyledTextField
        label="비밀번호 확인"
        type="password"
        variant="outlined"
        value={passwordConfirm}
        onChange={(evt) => {
          setPasswordConfirm(evt.target.value);
        }}
      />
      <StyledTextField
        label="휴대폰 번호"
        variant="outlined"
        value={phoneNumber}
        onChange={(evt) => {
          setPhoneNumber(evt.target.value);
        }}
      />
      <StyledButton
        variant="contained"
        onClick={async () => {
          try {
            navigate("/signup/inspect");
          } catch (err) {
            alert(err);
          }
        }}
      >
        AI 심사 시작하기
      </StyledButton>
      <input type="file" ref={hiddenFileInput} style={{ display: "none" }} />
    </StyledSignUpPage>
  );
};
