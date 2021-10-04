import { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { addressAtom } from "@/atoms/address";
import { ensAtom } from "@/atoms/ens";

export const resolveEnsAddress = async (
  ensAddress: string,
): Promise<string | null> => {
  const query = `
  query lookup($address: String!) {
    domains(where: { resolvedAddress: $address }) {
      name
    }
  }
  `;

  const variables = { address: ensAddress.toLowerCase() };
  try {
    const result = await fetch(
      "https://api.thegraph.com/subgraphs/name/ensdomains/ens",
      { method: "POST", body: JSON.stringify({ query, variables }) },
    );
    const { data } = await result.json();
    console.log(data);
    if (!data.domains.length) {
      throw new Error(`Could not resolve ${ensAddress} via ENS.`);
    }
    const address = data.domains[0].name;
    return address;
  } catch (error) {
    console.log(error);
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
