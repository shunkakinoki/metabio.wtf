import { atom } from "recoil";

export const poapAtom = atom<any[]>({
  default: [],
  key: "poap",
});
