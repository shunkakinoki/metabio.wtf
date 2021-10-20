import { utils } from "ethers";
import type {
  GetStaticProps,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticPropsContext,
} from "next";
import { useEffect } from "react";
import type { ReactElement } from "react";
import { SWRConfig } from "swr";

import { AppLayout } from "@/components/AppLayout";
import { GalleryScreen } from "@/components/GalleryScreen";
import {
  ENS_SWR,
  MIRROR_SWR,
  OPENSEA_SWR,
  PIN_SWR,
  POAP_SWR,
  SNAPSHOT_SWR,
  TOKEN_SWR,
} from "@/const/swr";
import { useAddress } from "@/hooks/useAddress";
import { resolveEnsName, lookupEnsAddress } from "@/libs/ens";
import { fetchMirrorArticles } from "@/libs/mirror";
import { fetchOpenseaAssets } from "@/libs/opensea";
import { fetchPins } from "@/libs/pin";
import { fetchPoaps } from "@/libs/poap";
import { fetchSnapshots } from "@/libs/snapshot";
import { fetchToken } from "@/libs/token";
import { concatSwrPath } from "@/libs/utils";
import type { OpenseaAsset } from "@/types/opensea";
import type { Pin } from "@/types/pin";
import type { Poap } from "@/types/poap";
import type { Snapshot } from "@/types/snapshot";
import type { Token } from "@/types/token";

export interface Props {
  address: string;
  ensName?: string;
  token: Token;
  snapshots: {
    votes: Snapshot[];
  };
  poaps: {
    accounts: { tokens: Poap[] };
  };
  mirrorArticles: {
    [x: string]: any;
  };
  assets: { assets: OpenseaAsset[] };
  pins: { data: Pin[] };
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: "blocking",
    paths: [],
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
}: GetStaticPropsContext) => {
  const slugs = params?.slug as string[];

  if (slugs.length !== 1) {
    return {
      notFound: true,
      revalidate: 300,
    };
  }

  const slug = slugs[0];
  let address: string;
  let ensName: string;

  if (slug.endsWith(".eth")) {
    try {
      address = await resolveEnsName(slug);
    } catch (err) {
      console.log(err);
    }
    ensName = slug;
  } else if (utils.isAddress(slug)) {
    address = slug;
    try {
      ensName = await lookupEnsAddress(slug);
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      address = await resolveEnsName(slug + ".eth");
    } catch (err) {
      console.log(err);
    }
    ensName = slug + ".eth";
  }

  if (!utils.isAddress(address)) {
    return {
      notFound: true,
      revalidate: 300,
    };
  }

  let pins: {
    data: Pin[];
  };
  try {
    pins = await fetchPins(address);
  } catch (err) {
    console.log(err);
  }

  let token: Token;
  try {
    token = await fetchToken(address);
  } catch (err) {
    console.log(err);
  }

  let snapshots: {
    votes: Snapshot[];
  };
  try {
    snapshots = await fetchSnapshots(address);
  } catch (err) {
    console.log(err);
  }

  let poaps: {
    accounts: {
      tokens: Poap[];
    };
  };
  try {
    poaps = await fetchPoaps(address.toLowerCase());
  } catch (err) {
    console.log(err);
  }

  let assets: {
    assets: OpenseaAsset[];
  };
  try {
    assets = await fetchOpenseaAssets(address);
  } catch (err) {
    console.log(err);
  }

  let mirrorArticles: {
    [x: string]: any;
  };
  try {
    mirrorArticles = await fetchMirrorArticles(address);
  } catch (err) {
    console.log(err);
  }

  const props = {
    props: {
      address: address,
      ensName: ensName ?? null,
      pins: pins ?? null,
      token: token ?? null,
      snapshots: snapshots ?? null,
      mirrorArticles: mirrorArticles ?? null,
      poaps: poaps ?? null,
      assets: assets ?? null,
    },
  };
  console.log(JSON.stringify(props));

  return {
    props: props,
    revalidate: 300,
  };
};

export const Slug = ({
  address: slugAddress,
  ensName,
  token,
  mirrorArticles,
  snapshots,
  poaps,
  assets,
  pins,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const { address, setAddress } = useAddress();

  useEffect(() => {
    setAddress(slugAddress);
  }, [setAddress, slugAddress]);

  return (
    <SWRConfig
      value={{
        fallback: {
          [concatSwrPath(PIN_SWR, address)]: pins,
          [concatSwrPath(ENS_SWR, address)]: ensName,
          [concatSwrPath(MIRROR_SWR, address)]: mirrorArticles,
          [concatSwrPath(TOKEN_SWR, address)]: token,
          [concatSwrPath(SNAPSHOT_SWR, address)]: snapshots,
          [concatSwrPath(POAP_SWR, address)]: poaps,
          [concatSwrPath(OPENSEA_SWR, address)]: assets,
        },
      }}
    >
      {address === slugAddress && <GalleryScreen />}{" "}
    </SWRConfig>
  );
};

export default Slug;

Slug.getLayout = (page: ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};
