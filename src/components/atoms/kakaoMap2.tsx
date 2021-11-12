import React, { useEffect, useState } from "react";
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
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";

import { useNavigate } from "react-router";

export const StyledKakaoMap = styled.div``;

const StyledButton = styled(Button)`
  && {
    background-color: red;
    margin-top: 60px;
    width: 100%;
    height: 40px;
  }
`;

interface PropType {
  search: string;
  destination: PositionType | null;
}

interface PositionType {
  lng: number;
  lat: number;
}

export const KakaoMap = ({
  search,
  destination,
}: PropType): JSX.Element | null => {
  const [myPosition, setMyPosition] = useState({
    lat: 37.36526451230517,
    lng: 127.10676860117488,
  });
  const [isHere, setIsHear] = useState(false);
  const [isViewDest, setIsViewDest] = useState(false);
  const [destPosition, setDestPosition] = useState({ lat: 0, lng: 0 });
  const [isClickable, setIsClickable] = useState(true);

  const navigate = useNavigate();
  const destPositionSetting = (mouseEvent: any) => {
    setDestPosition({
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    });
    setIsViewDest(true);
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      /* 위치정보 사용 가능 */
      navigator.geolocation.getCurrentPosition((pos) => {
        setMyPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });

        setIsHear(true);
      });
    } else {
      /* 위치정보 사용 불가능 */
    }
    if (destination != null) {
      setIsClickable(false);
      setDestPosition(destination);
      setIsViewDest(true);
    }
  }, []);

  return (
    <StyledKakaoMap>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: myPosition.lat,
          lng: myPosition.lng,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "450px",
        }}
        level={3} // 지도의 확대 레벨
        onClick={(_t, mouseEvent) =>
          isClickable ? destPositionSetting(mouseEvent) : null
        }
      >
        {isHere ? (
          <MapMarker
            position={myPosition}
            image={{
              src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
              size: {
                width: 64,
                height: 69,
              }, // 마커이미지의 크기입니다
              options: {
                offset: {
                  x: 27,
                  y: 69,
                }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
              },
            }}
          />
        ) : null}
        {isViewDest && (
          <MapMarker
            position={destPosition}
            onClick={() => isClickable && setIsViewDest(false)}
          />
        )}
        <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
          // 커스텀 오버레이가 표시될 위치입니다
          position={myPosition}
          yAnchor={3.8}
        >
          {/* 커스텀 오버레이에 표시할 내용입니다 */}
          <div className="label" style={{ color: "#000" }}>
            <span className="left"></span>
            <span className="center">현위치</span>
            <span className="right"></span>
          </div>
        </CustomOverlayMap>
        {isViewDest && isClickable && (
          <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
            // 커스텀 오버레이가 표시될 위치입니다
            position={destPosition}
            yAnchor={1.4}
          >
            {/* 커스텀 오버레이에 표시할 내용입니다 */}
            <StyledButton
              variant="outlined"
              onClick={() => navigate("/signup")}
            >
              목적지 등록
            </StyledButton>
          </CustomOverlayMap>
        )}
      </Map>
    </StyledKakaoMap>
  );
};
