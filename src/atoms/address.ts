import { atom } from "recoil";

export const addressAtom = atom<string>({
  default: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
  key: "address",
});
