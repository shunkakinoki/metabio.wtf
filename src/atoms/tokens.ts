import { atom } from "recoil";

import type { Token } from "@/types/token";

export const tokensAtom = atom<Token[]>({
  default: null,
  key: "tokens",
});
