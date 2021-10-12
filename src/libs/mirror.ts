import { request } from "graphql-request";

import { ARWEAVE_BASE_URL } from "@/const/api";
import { arweave } from "@/libs/arweave";
import { MIRROR_QUERY } from "@/queries/mirror";

const formatEntry = async (entry, transactionId) => {
  return {
    title: entry.content.title,
    body: entry.content.body,
    timestamp: entry.content.timestamp,
    digest: entry.originalDigest,
    contributor: entry.authorship.contributor,
    transaction: transactionId,
    cover_image:
      (entry.content.body
        .split("\n\n")[0]
        .match(/!\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\)/m) || [])?.[1] ||
      null,
  };
};

export const fetchMirrorArticles = async (
  profileAddress: string,
): Promise<{
  [x: string]: any;
}> => {
  try {
    const data = await request(ARWEAVE_BASE_URL, MIRROR_QUERY, {
      profileAddresses: [profileAddress],
    });

    if (!data.transactions.edges) {
      throw new Error(`Could not resolve ${profileAddress} via Mirror.`);
    }
    const {
      transactions: { edges },
    } = data;

    const paths = edges
      .map(({ node }) => {
        const tags = Object.fromEntries(
          node.tags.map(tag => {
            return [tag.name, tag.value];
          }),
        );

        return { slug: tags["Original-Content-Digest"], path: node.id };
      })
      .filter(entry => {
        return entry.slug && entry.slug !== "";
      })
      .reduce((acc, current) => {
        const x = acc.find(entry => {
          return entry.slug === current.slug;
        });
        if (!x) return acc.concat([current]);
        else return acc;
      }, []);

    const articles = await Promise.all(
      paths.map(async entry => {
        return formatEntry(
          JSON.parse(
            //@ts-ignore
            await arweave.transactions.getData(entry.path as string, {
              decode: true,
              string: true,
            }),
          ),
          entry.slug,
        );
      }),
    );

    return articles;
  } catch (error) {
    return null;
  }
};
