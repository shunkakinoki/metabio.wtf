import type { providers } from "ethers";

import { atom } from "recoil";

export const web3Atom = atom<providers.Web3Provider>({
  default: null,
  key: "web3",
  dangerouslyAllowMutability: true,
});
