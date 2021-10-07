import { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { addressAtom } from "@/atoms/address";
import { ensAtom } from "@/atoms/ens";
import { lookupEnsAddress } from "@/libs/ens";

export const useEns = () => {
  const address = useRecoilValue(addressAtom);
  const [ens, setEns] = useRecoilState(ensAtom);

  useEffect(() => {
    if (!address) {
      return;
    }

    const fetchData = async () => {
      setEns(await lookupEnsAddress(address));
    };

    fetchData();
  }, [address, setEns]);

  return { ens, setEns };
};
