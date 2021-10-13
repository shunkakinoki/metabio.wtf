import AOS from "aos";
import type { NextPage } from "next";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import type { ReactElement, ReactNode } from "react";
import { RecoilRoot } from "recoil";
import { SWRConfig } from "swr";

import { Seo } from "@/components/Seo";
import "@/styles/index.css";
import "aos/dist/aos.css";

type NextPageWithLayout = NextPage & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const CustomApp = ({
  Component,
  pageProps,
}: AppPropsWithLayout): JSX.Element => {
  const getLayout =
    Component.getLayout ??
    (page => {
      return page;
    });

  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 300,
    });
  }, []);

  return (
    <SWRConfig
      value={{
        onError: (err, key, config) => {
          console.error(err, key, config);
        },
        onErrorRetry: (err, key, config, revalidate, revalidateOps) => {
          console.error(err, key, config, revalidate, revalidateOps);
        },
        onSuccess: (data, key, config) => {
          console.log(data, key, config);
        },
      }}
    >
      <RecoilRoot>
        <Seo />
        <ThemeProvider attribute="class" defaultTheme="system">
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </RecoilRoot>
    </SWRConfig>
  );
};

export default CustomApp;
