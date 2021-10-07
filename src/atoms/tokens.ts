import { atom } from "recoil";

export const tokensAtom = atom<any[]>({
  default: null,
  key: "tokens",
});
