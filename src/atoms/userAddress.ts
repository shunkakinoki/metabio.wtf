import { atom } from "recoil";

export const userAddressAtom = atom<string>({
  default: null,
  key: "userAddress",
});
