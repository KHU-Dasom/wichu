import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Container,
  TextField,
  Typography,
  Box,
  Button,
  IconButton,
  Modal,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import { useNavigate } from "react-router";

export const StyledKakaoMap = styled.div``;

const StyledButton = styled(Button)`
  z-index: 199999999;
  && {
    background-color: red;
    margin-top: 40px;
    width: 100%;
    height: 40px;
  }
`;
const BoxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface PropType {
  search: string;
  destination: PositionType | null;
  createDest: any;
}

interface PositionType {
  lng: number;
  lat: number;
}

export const KakaoMap = ({
  search,
  destination,
  createDest,
}: PropType): JSX.Element | null => {
  const [myPosition, setMyPosition] = useState({
    lat: 37.36526451230517,
    lng: 127.10676860117488,
  });
  const [isHere, setIsHear] = useState(false);
  const [isViewDest, setIsViewDest] = useState(false);
  const [destPosition, setDestPosition] = useState({ lat: 0, lng: 0 });
  const [isClickable, setIsClickable] = useState(true);
  const [isModalView, setIsModalView] = useState(false);

  const navigate = useNavigate();

  const closeModal = () => {
    setIsModalView(false);
  };
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
      <Modal
        open={isModalView}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 200,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            목적지 생성 성공!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            리스트에 가서 동행할 친구를 찾아보세요!
          </Typography>
          <StyledButton
            variant="contained"
            onClick={() => {
              closeModal();
              navigate("./partnerListPage");
            }}
          >
            확인
          </StyledButton>
        </Box>
      </Modal>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: myPosition.lat,
          lng: myPosition.lng,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "100vh",
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
            yAnchor={0.3}
          >
            {/* 커스텀 오버레이에 표시할 내용입니다 */}
            <StyledButton
              variant="contained"
              onClick={() => {
                createDest(destPosition);
                setIsModalView(true);
              }}
            >
              목적지 등록
            </StyledButton>
          </CustomOverlayMap>
        )}
      </Map>
    </StyledKakaoMap>
  );
};
