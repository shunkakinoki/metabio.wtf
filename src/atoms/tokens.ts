import { atom } from "recoil";

import type { TokensEntity } from "@/types/token";

export const tokensAtom = atom<TokensEntity[]>({
  default: null,
  key: "tokens",
});
