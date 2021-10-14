import { atom } from "recoil";

export const authenticatedAtom = atom<boolean>({
  default: false,
  key: "authenticated",
});
