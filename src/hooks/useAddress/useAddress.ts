import { useRecoilState } from "recoil";

import { addressAtom } from "@/atoms/address";

export const useAddress = () => {
  const [address, setAddress] = useRecoilState(addressAtom);

  return { address, setAddress };
};
