import { atom } from "recoil";

export const addressAtom = atom<string>({
  default: null,
  key: "address",
});
