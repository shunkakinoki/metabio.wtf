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
    <section className="pt-6 pb-16 sm:pb-24">
      <div className="px-4 mx-auto mt-16 sm:mt-24 max-w-5xl">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-trueGray-700">
            <span
              className="block xl:inline"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              The only bio you need in the
            </span>{" "}
            <span data-aos="zoom-y-out" data-aos-delay="450">
              <span className="block xl:inline text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                metaverse
              </span>{" "}
              <span
                data-aos="zoom-y-out"
                data-aos-delay="450"
                role="img"
                aria-label="happy"
              >
                🥳
              </span>
            </span>
          </h1>
          <p
            data-aos="zoom-y-out"
            data-aos-delay="600"
            className="mx-auto mt-3 md:mt-5 max-w-md md:max-w-3xl text-base sm:text-lg md:text-xl text-gray-500"
          >
            Show everyone what you’ve done and what you own.
          </p>
        </div>
        <div className="sm:flex sm:justify-center mx-auto mt-8 md:mt-16 max-w-md">
          <div
            data-aos="zoom-y-out"
            data-aos-delay="800"
            className="rounded-md shadow"
          >
            <WalletConnect
              href="/profile"
              connectedChildren="Enter profile"
              className="py-4 px-8 text-xl text-blueGray-100 bg-gradient-to-r from-pink-300 hover:from-pink-200 via-purple-300 hover:via-purple-200 to-indigo-400 hover:to-indigo-300 rounded-lg border-2 border-trueGray-400 duration-200 hover:scale-110"
            >
              Connect wallet
            </WalletConnect>
          </div>
        </div>
      </div>
    </section>
  );
};
