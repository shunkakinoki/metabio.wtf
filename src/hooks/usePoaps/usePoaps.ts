import { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { addressAtom } from "@/atoms/address";
import { poapAtom } from "@/atoms/poap";

export const resolvePoaps = async (address: string): Promise<any[]> => {
  const query = `
  query lookup($address: String!) {
    accounts(where: { id: $address }) {
      id
      tokens {
        id
        event {
          id
        }
      }
    }
  }
  `;

  const variables = { address: address.toLowerCase() };
  try {
    const result = await fetch(
      "https://api.thegraph.com/subgraphs/name/poap-xyz/poap-xdai",
      { method: "POST", body: JSON.stringify({ query, variables }) },
    );
    const { data } = await result.json();
    if (!data.accounts[0].tokens) {
      throw new Error(`Could not resolve ${address} via Poap.`);
    }
    const poaps = data.accounts[0].tokens;
    return poaps;
  } catch (error) {
    return null;
  }
};

export const usePoaps = () => {
  const address = useRecoilValue(addressAtom);
  const [poaps, setPoaps] = useRecoilState(poapAtom);

  useEffect(() => {
    if (!address) {
      return;
    }

    const fetchData = async () => {
      setPoaps(await resolvePoaps(address));
    };

    fetchData();
  }, [address, setPoaps]);

  return { poaps, setPoaps };
};
