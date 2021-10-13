import { DefaultSeo as Default } from "next-seo";
import Head from "next/head";
import type { FC } from "react";

export const Seo: FC = () => {
  return (
    <>
      <Default
        noindex={false}
        nofollow={false}
        title="Metabio"
        canonical="https://www.metabio.wtf"
        description="Metabio - A Metaverse Explorer."
        openGraph={{
          locale: "en_US",
          site_name: "metabio.wtf",
          type: "website",
          url: "https://www.metabio.wtf",
          images: [{ url: "https://www.metabio.wtf/ogp.jpg" }],
        }}
        twitter={{
          cardType: "summary_large_image",
          handle: "@metabio_",
          site: "@metabio_",
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
    </>
  );
};
