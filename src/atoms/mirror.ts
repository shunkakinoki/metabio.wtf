import { atom } from "recoil";

export const mirrorAtom = atom<any[]>({
  default: [],
  key: "mirror",
});
