import { utils } from "ethers";
import type {
  GetStaticProps,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticPropsContext,
} from "next";
import { useEffect } from "react";
import { SWRConfig } from "swr";

import { GalleryScreen } from "@/components/GalleryScreen";
import {
  ENS_SWR,
  OPENSEA_SWR,
  POAP_SWR,
  SNAPSHOT_SWR,
  TOKEN_SWR,
} from "@/const/swr";
import { useAddress } from "@/hooks/useAddress";
import { resolveEnsName } from "@/libs/ens";
import { fetchOpenseaAssets } from "@/libs/opensea";
import { fetchPoaps } from "@/libs/poap";
import { fetchSnapshots } from "@/libs/snapshot";
import { fetchToken } from "@/libs/token";
import { concatSwrPath } from "@/libs/utils";
import type { OpenseaAsset } from "@/types/opensea";
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
  assets: { assets: OpenseaAsset[] };
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

  if (slug.endsWith(".eth")) {
    address = await resolveEnsName(slug);
  } else address = slug;

  if (!utils.isAddress(address)) {
    return {
      notFound: true,
      revalidate: 300,
    };
  }

  const token = await fetchToken(address);
  const snapshots = await fetchSnapshots(address);
  const poaps = await fetchPoaps(address);
  const assets = await fetchOpenseaAssets(address);

  return {
    props: {
      address: address,
      ensName: slug,
      token: token,
      snapshots: snapshots,
      poaps: poaps,
      assets: assets,
    },
    revalidate: 300,
  };
};

export const PageId = ({
  address: slugAddress,
  ensName,
  token,
  snapshots,
  poaps,
  assets,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const { address, setAddress } = useAddress();

  useEffect(() => {
    setAddress(slugAddress);
  });

  return (
    <SWRConfig
      value={{
        fallback: {
          [concatSwrPath(ENS_SWR, address)]: ensName,
          [concatSwrPath(TOKEN_SWR, address)]: token,
          [concatSwrPath(SNAPSHOT_SWR, address)]: snapshots,
          [concatSwrPath(POAP_SWR, address)]: poaps,
          [concatSwrPath(OPENSEA_SWR, address)]: assets,
        },
      }}
    >
      {address === slugAddress && <GalleryScreen />}
    </SWRConfig>
  );
};

export default PageId;
