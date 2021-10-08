import { atom } from "recoil";

export const profileAddressAtom = atom<string>({
  default: null,
  key: "profileAddress",
});
