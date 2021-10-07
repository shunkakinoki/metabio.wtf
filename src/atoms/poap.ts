import { atom } from "recoil";

import type { Poap } from "@/types/poap";

export const poapAtom = atom<Poap[]>({
  default: [],
  key: "poap",
});
