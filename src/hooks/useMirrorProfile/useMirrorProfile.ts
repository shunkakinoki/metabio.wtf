import { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { mirrorProfileAtom } from "@/atoms/mirror";
import { profileAddressAtom } from "@/atoms/profileAddress";

export const resolveMirrorProfile = async (address: string): Promise<any[]> => {
  const query = `
  query lookup($address: String!) {
    publication(ensLabel: $address) {
      displayName
      avatarURL
      ensLabel
      publicationSettings {
        settings
      }
    }
  }
  `;

  const variables = { address: "coopahtroopa" };
  try {
    const result = await fetch("https://mirror-api.com/graphql", {
      headers: new Headers({ "content-type": "application/json" }),
      method: "POST",
      body: JSON.stringify({ query, variables }),
    });
    const { data } = await result.json();
    if (!data.accounts[0].tokens) {
      throw new Error(`Could not resolve ${address} via Mirror.`);
    }
    const mirrorProfile = data.accounts[0].tokens;
    return mirrorProfile;
  } catch (error) {
    return null;
  }
};

export const useMirrorProfile = () => {
  const profileAddress = useRecoilValue(profileAddressAtom);
  const [mirrorProfile, setMirrorProfile] = useRecoilState(mirrorProfileAtom);

  useEffect(() => {
    if (!profileAddress) {
      return;
    }

    const fetchData = async () => {
      setMirrorProfile(await resolveMirrorProfile(profileAddress));
    };

    fetchData();
  }, [profileAddress, setMirrorProfile]);

  return { mirrorProfile, setMirrorProfile };
};
