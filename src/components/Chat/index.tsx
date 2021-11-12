import { useEffect } from "react";
import Logo from "./wichu-icon.png";

const domain = process.env.REACT_APP_JITSI_DOMAIN; // domain
const jitsi = document.querySelector("#jitsi-root");

const options = {
  roomName: "JitsiMeetAPIExample", // room Token 설정
  width: 360,
  height: 700,
  parentNode: jitsi,
  userInfo: {
    email: "email@jitsiexampleemail.com",
    displayName: "John Doe", // user 이름
  },
  configOverwrite: {
    startWithAudioMuted: true,
  },
  interfaceConfigOverwrite: {
    MOBILE_APP_PROMO: false,
  },
};

const onLeft = () => {
  const node = jitsi;
  while (node?.firstChild) {
    node.removeChild(node.firstChild);
  }
  window.location.href = "/";
};

const Chat = ({ ...props }) => {
  useEffect(() => {
    let api: {
      addListener: (arg0: string, arg1: () => void) => void;
      removeListener: (arg0: string, arg1: any) => void;
    };
    window.onload = () => {
      // @ts-ignore
      // https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe
      api = new JitsiMeetExternalAPI(domain, {
        ...options,
        roomName: "JitsiMeetAPIExample", // room Token 설정
        userInfo: {
          userInfo: {
            email: "email@jitsiexampleemail.com",
            displayName: "John Doe", // user 이름
          },
        },
      });

      const block = document.createElement("img");
      block.style.display = "block";
      block.style.width = "130px";
      block.style.height = "90px";
      block.style.position = "absolute";
      block.style.top = "0";
      block.src = Logo;

      jitsi?.appendChild(block);

      api.addListener("videoConferenceLeft", onLeft);
    };
    return () => {
      api?.removeListener("videoConferenceLeft", onLeft);
    };
  }, []);

  return <></>;
};

export default Chat;
