import dynamic from "next/dynamic";

const WalletConnect = dynamic(
  () => {
    return import("@/components/WalletConnect").then(mod => {
      return mod.WalletConnect;
    });
  },
  {
    ssr: false,
  },
);

export const HomeHero = () => {
  return (
    <section className="flex justify-center items-center h-full">
      <div className="px-4 pt-12 sm:pt-20 md:pt-24 mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-trueGray-700">
            <span className="block xl:inline">
              The only bio you need in the
            </span>{" "}
            <span className="block xl:inline text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
              metaverse
            </span>{" "}
            <span role="img" aria-label="happy">
              🥳
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-md md:max-w-3xl text-base sm:text-lg md:text-xl text-gray-500">
            Show everyone what you’ve most proud of.
          </p>
        </div>
        <div className="flex justify-center mx-auto mt-8 md:mt-16 max-w-lg">
          <div className="rounded-md shadow">
            <WalletConnect
              href="/profile"
              connectedChildren="Enter profile"
              className="py-4 px-8 text-xl text-blueGray-100 bg-indigo-600 hover:bg-indigo-700 bg-gradient-to-r rounded-lg border-2 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 duration-200 hover:scale-110 focus:outline-none"
            >
              Connect wallet
            </WalletConnect>
          </div>
        </div>
      </div>
    </section>
  );
};
