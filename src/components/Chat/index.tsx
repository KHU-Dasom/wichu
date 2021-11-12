const domain = "meet.jit.si"; // domain

const options = {
  roomName: "JitsiMeetAPIExample", // room Token 설정
  width: 360,
  height: 700,
  parentNode: document.querySelector("#jitsi-root"),
  userInfo: {
    email: "email@jitsiexampleemail.com",
    displayName: "John Doe", // user 이름
  },
};

const Chat = () => {
  window.onload = () => {
    // @ts-ignore
    const api = new JitsiMeetExternalAPI(domain, options);
  };
  return <></>;
};

export default Chat;
