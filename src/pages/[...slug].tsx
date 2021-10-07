import type {
  GetStaticProps,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticPropsContext,
} from "next";

import { resolveEnsName } from "@/libs/ens";

export interface Props {
  address: string;
  ensName?: string;
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

  if (slug.endsWith(".eth")) {
    const address = await resolveEnsName(slug);
    if (address) {
      return {
        props: {
          address: address,
          ensName: slug,
        },
      };
    }
  }

  return {
    props: {
      address: slug,
    },
  };
};

export const PageId = ({
  address,
  ensName,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <>
      <h1 className="text-white">{address}</h1>
      <h1 className="text-white">{ensName}</h1>
    </>
  );
};

export default PageId;
