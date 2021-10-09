import AOS from "aos";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import { SWRConfig } from "swr";

import "@/styles/index.css";
import "aos/dist/aos.css";

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
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
        <ThemeProvider attribute="class" defaultTheme="system">
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </SWRConfig>
  );
};

export default CustomApp;
