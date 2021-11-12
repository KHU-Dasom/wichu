import React, { useState } from "react";
import styled from "styled-components";
import { Container, TextField, Typography, Box, Button } from "@mui/material";
import wichuIcon from "../../../assets/icon/wichu-icon.png";
import { useNavigate } from "react-router";
import { api } from "../../../utils/api";
import { authorizationState, userOidState } from "../../../recoil/atoms";
import { useRecoilState } from "recoil";

const StyledSignInPage = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
`;

const StyledTextField = styled(TextField)`
  width: 100%;

  input {
    padding: 1rem;
  }
`;

const LogoBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 0 auto 5rem;
`;

const WichuIcon = styled.img`
  width: 120px;
  margin: 0 auto;
`;

const StyledButton = styled(Button)`
  && {
    width: 100%;
    height: 50px;
  }
`;

export const SignInPage = (): JSX.Element | null => {
  const [userOid, setUserOid] = useRecoilState(userOidState);
  const [authorization, setAuthorization] = useRecoilState(authorizationState);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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
      <StyledTextField
        label="아이디"
        variant="standard"
        value={id}
        onChange={(evt) => {
          setId(evt.target.value);
        }}
        sx={{ marginBottom: "1rem" }}
      />
      <StyledTextField
        label="비밀번호"
        type="password"
        variant="standard"
        onChange={(evt) => {
          setPassword(evt.target.value);
        }}
      />
      <StyledButton
        variant="contained"
        sx={{ marginTop: "4rem", marginBottom: "1rem" }}
        onClick={async () => {
          try {
            const { data, headers } = await api.post("/api/v1/auth/login", {
              login_id: id,
              login_pw: password,
            });
            setUserOid(data.user.oid);
            setAuthorization(headers["x-authorization-update"]);
            navigate("/");
          } catch (err) {
            alert(err);
          }
        }}
      >
        로그인
      </StyledButton>
      <StyledButton variant="outlined" onClick={() => navigate("/signup")}>
        회원가입
      </StyledButton>
    </StyledSignInPage>
  );
};
