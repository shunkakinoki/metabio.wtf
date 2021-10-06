import { atom } from "recoil";

export const snapshotAtom = atom<any[]>({
  default: [],
  key: "snapshot",
});
