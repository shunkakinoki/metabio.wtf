import { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { addressAtom } from "@/atoms/address";
import { mirrorArticlesAtom } from "@/atoms/mirror";
import { arweave } from "@/libs/arweave";

const formatEntry = async (entry, transactionId) => {
  return {
    title: entry.content.title,
    publication: entry.content.publication,
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

export const resolveMirrorArticles = async (
  address: string,
): Promise<{
  [x: string]: any;
}> => {
  const query = `
	query FetchTransactions($addresses: [String!]!) {
    transactions(first: 100, tags: [{ name: "App-Name", values: ["MirrorXYZ"] }, { name: "Contributor", values: $addresses }]) {
    edges {
      node {
        id
          tags {
            name
            value
          }
        }
      }
    }
  }
  `;

  const variables = {
    addresses: [address],
  };
  try {
    const result = await fetch("https://arweave.net/graphql", {
      headers: new Headers({ "content-type": "application/json" }),
      method: "POST",
      body: JSON.stringify({ query, variables }),
    });
    const { data } = await result.json();
    if (!data.transactions.edges) {
      throw new Error(`Could not resolve ${address} via Mirror.`);
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
            await arweave.transactions.getData(entry.path, {
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

export const useMirrorArticles = () => {
  const address = useRecoilValue(addressAtom);
  const [mirrorArticles, setMirrorArticles] =
    useRecoilState(mirrorArticlesAtom);

  useEffect(() => {
    if (!address) {
      return;
    }

    const fetchData = async () => {
      setMirrorArticles(await resolveMirrorArticles(address));
    };

    fetchData();
  }, [address, setMirrorArticles]);

  return { mirrorArticles, setMirrorArticles };
};
