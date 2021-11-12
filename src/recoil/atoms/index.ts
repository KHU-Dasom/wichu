import { atom } from "recoil";
import recoilJsKeys from "../recoilJsKeys";

const authorizationState = atom({
  key: recoilJsKeys.token,
  default: "",
});

const userOidState = atom({
  key: recoilJsKeys.userOid,
  default: "",
});

export { userOidState, authorizationState };
