import { utils } from "ethers";
import type {
  GetStaticProps,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticPropsContext,
} from "next";
import { SWRConfig } from "swr";

import { GalleryScreen } from "@/components/GalleryScreen";
import { TOKEN_SWR } from "@/const/swr";
import { resolveEnsName } from "@/libs/ens";
import { fetchToken } from "@/libs/token";
import type { Token } from "@/types/token";

export interface Props {
  address: string;
  ensName?: string;
  token: Token;
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

  return {
    props: {
      address: address,
      ensName: slug,
      token: token,
    },
  };
};

export const PageId = ({
  address,
  ensName,
  token,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <SWRConfig
      value={{
        fallback: {
          [`${TOKEN_SWR + address}`]: token,
        },
      }}
    >
      <GalleryScreen />
    </SWRConfig>
  );
};

export default PageId;
