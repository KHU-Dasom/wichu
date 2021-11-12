import { Box, Container, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { KakaoMap } from "../../atoms/kakaoMap2";
import { userApi } from "../../../utils/api";
import { useNavigate } from "react-router";
import { showExitButtonState } from "../../../recoil/atoms";
import { useRecoilState } from "recoil";
import { BottomNavigation } from "../../atoms/bottomNavigation/bottomNavigation";

const StyledHomePage = styled(Container)`
  padding: 0px 10px;
`;

const StyledMapField = styled(Container)`
  z-index: 2;
  position: relative;
`;

const StyledExitField = styled(Button)`
  z-index: 999;
  position: absolute !important;
  top: 2%;
  right: 7%;
`;

interface PositionType {
  lng: number;
  lat: number;
}
interface UserInfoType {
  user_pk: string;
  user_id: string;
  name: string;
  age: number;
  gender: string;
  phone: string;
  profile: string;
  accompany: string | null;
}

export const HomePage = (): JSX.Element | null => {
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);
  const [destination, setDestination] = useState<PositionType | null>(null);
  // api 호출하는 부분 만들어야함.
  // 그리고
  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();
  const [showExitButton, setShowExitButton] =
    useRecoilState(showExitButtonState);

  const fetchData = async () => {
    const userInfoResult: any = await userApi.getInfo(
      "618e90b1c1d7d6584445f61f"
    );
    if (userInfoResult.status === 200) {
      const tempUserInfo = userInfoResult.data;
      setUserInfo({
        user_pk: tempUserInfo.user_pk,
        user_id: tempUserInfo.user_id,
        name: tempUserInfo.name,
        age: tempUserInfo.number,
        gender: tempUserInfo.gender,
        phone: tempUserInfo.phone,
        profile: tempUserInfo.profile,
        accompany: tempUserInfo.accompany,
      });
    }
    return userInfo;
  };

  const createDest = async (newDestination: PositionType) => {
    const createDestResult: any = await userApi.createDestination(
      "618e90b1c1d7d6584445f61f",
      newDestination
    );
  };
  return (
    <StyledHomePage maxWidth="sm" sx={{}}>
      <StyledMapField sx={{ my: 1 }}>
        {/* {destination
          ? destination */}
        {showExitButton ? (
          <StyledExitField
            variant="contained"
            onClick={() => {
              setShowExitButton(false);
              navigate("/rating");
            }}
          >
            동행 종료하기
          </StyledExitField>
        ) : null}
        {userInfo
          ? userInfo.accompany
          : null && (
              <StyledExitField variant="contained" onClick={() => {}}>
                등록취소
              </StyledExitField>
            )}
        <KakaoMap
          search="asd"
          destination={destination ? destination : null}
          createDest={createDest}
        />
      </StyledMapField>
      <BottomNavigation value={0} />
    </StyledHomePage>
  );
};
