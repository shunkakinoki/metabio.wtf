import { atom } from "recoil";

export const ensAtom = atom<string>({
  default: null,
  key: "ens",
});
