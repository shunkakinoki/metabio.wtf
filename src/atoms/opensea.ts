import { atom } from "recoil";

import type { OpenseaAsset } from "@/types/opensea";

export const openSeaAtom = atom<OpenseaAsset[]>({
  default: [],
  key: "ens",
});
