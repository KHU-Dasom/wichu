import React from "react";
import styled from "styled-components";
import { Container, TextField, Typography, Box, Button } from "@mui/material";
import wichuIcon from "../../../assets/icon/wichu-icon.png";

const StyledSignInPage = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
`;

const StyledTextField = styled(TextField)`
  width: 100%;

  input {
    padding: 12px 0;
  }
`;

const LogoBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 0 auto 60px;
`;

const WichuIcon = styled.img`
  width: 120px;
  margin: 0 auto;
`;

const StyledButton = styled(Button)`
  && {
    margin-top: 60px;
    width: 100%;
    height: 50px;
  }
`;

export const SignInPage = (): JSX.Element | null => {
  return (
    <StyledSignInPage maxWidth="sm">
      <LogoBox>
        <WichuIcon src={wichuIcon} />
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: 700, textAlign: "center" }}
        >
          wichu
        </Typography>
      </LogoBox>
      <StyledTextField placeholder="아이디" variant="standard" />
      <StyledTextField
        placeholder="비밀번호"
        type="password"
        variant="standard"
      />
      <StyledButton variant="contained">로그인</StyledButton>
    </StyledSignInPage>
  );
};
