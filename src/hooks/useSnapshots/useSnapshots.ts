import { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { addressAtom } from "@/atoms/address";
import { snapshotAtom } from "@/atoms/snapshot";

export const resolveSnapshots = async (address: string): Promise<any[]> => {
  const query = `
  query lookup($address: String!) {
    votes(where: { voter: $address }) {
      space {
        id
      }
    }
  }
  `;

  const variables = { address: address };
  try {
    const result = await fetch("https://hub.snapshot.org/graphql", {
      headers: new Headers({ "content-type": "application/json" }),
      method: "POST",
      body: JSON.stringify({ query, variables }),
    });
    const { data } = await result.json();
    console.log(data.votes[0]);
    if (!data.votes[0]) {
      throw new Error(`Could not resolve ${address} via Snapshot.`);
    }
    const snapshots = data.votes;
    return snapshots;
  } catch (error) {
    return null;
  }
};

export const useSnapshots = () => {
  const address = useRecoilValue(addressAtom);
  const [snapshots, setPoaps] = useRecoilState(snapshotAtom);

  useEffect(() => {
    if (!address) {
      return;
    }

    const fetchData = async () => {
      setPoaps(await resolveSnapshots(address));
    };

    fetchData();
  }, [address, setPoaps]);

  return { snapshots, setPoaps };
};
