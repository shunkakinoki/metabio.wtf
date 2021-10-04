import { WalletConnect } from "@/components/WalletConnect";

export const HomeHero = () => {
  return (
    <div className="px-4 sm:px-6 mx-auto max-w-3xl">
      <div className="pt-32 md:pt-40 pb-12 md:pb-20">
        <div className="pb-12 md:pb-16 text-center">
          <h1
            className="mb-4 text-6xl md:text-8xl font-extrabold leading-relaxed text-blueGray-800"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            Explore your{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              metaverse
            </span>
          </h1>
          <div className="mx-auto max-w-3xl">
            <div
              className="sm:flex sm:justify-center mx-auto mt-12 md:mt-16 max-w-xs sm:max-w-none"
              data-aos="zoom-y-out"
              data-aos-delay="900"
            >
              <WalletConnect className="py-4 px-8 text-xl text-blueGray-100 bg-gradient-to-r from-pink-300 hover:from-pink-200 via-purple-300 hover:via-purple-200 to-indigo-400 hover:to-indigo-300 rounded-lg border-2 border-trueGray-400">
                Connect wallet
              </WalletConnect>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
