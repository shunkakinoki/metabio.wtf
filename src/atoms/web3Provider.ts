import type { providers } from "ethers";

import { atom } from "recoil";

export const web3ProviderAtom = atom<providers.Web3Provider>({
  default: null,
  key: "web3Provider",
  dangerouslyAllowMutability: true,
});
