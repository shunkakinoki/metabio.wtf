import type { providers } from "ethers";

import { useRecoilState, atom } from "recoil";

export const web3Atom = atom<providers.Web3Provider>({
  default: null,
  key: "web3",
  dangerouslyAllowMutability: true,
});

export const useWeb3 = () => {
  const [web3, setWeb3] = useRecoilState(web3Atom);

  return { web3, setWeb3 };
};
