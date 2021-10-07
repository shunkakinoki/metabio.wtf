import { atom } from "recoil";

import type { Snapshot } from "@/types/snapshot";

export const snapshotAtom = atom<Snapshot[]>({
  default: [],
  key: "snapshot",
});
