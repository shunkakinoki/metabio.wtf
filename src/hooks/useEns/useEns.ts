import { ethers } from "ethers";
import { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { addressAtom } from "@/atoms/address";
import { ensAtom } from "@/atoms/ens";

export const resolveEnsAddress = async (
  ensAddress: string,
): Promise<string | null> => {
  try {
    const provider = new ethers.providers.CloudflareProvider();
    const ens = await provider.lookupAddress(ensAddress);
    return ens;
  } catch (error) {
    return null;
  }
};

export const useEns = () => {
  const address = useRecoilValue(addressAtom);
  const [ens, setEns] = useRecoilState(ensAtom);

  useEffect(() => {
    if (!address) {
      return;
    }

    const fetchData = async () => {
      setEns(await resolveEnsAddress(address));
    };

    fetchData();
  }, [address, setEns]);

  return { ens, setEns };
};
