import {
  CakeIcon,
  CurrencyRupeeIcon,
  PencilIcon,
  PlusCircleIcon,
  LocationMarkerIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "NFTs",
    icon: CakeIcon,
    description: "Showcase your proudly earned NFTS here.",
  },
  {
    name: "POAPs",
    icon: LocationMarkerIcon,
    description:
      "Show off proof of events that you have attended online and IRL.",
  },
  {
    name: "Social Tokens",
    icon: CurrencyRupeeIcon,
    description: "What creators and professionals do you believe in. ",
  },
  {
    name: "DAOs",
    icon: UserGroupIcon,
    description:
      "We track what communities you are part of and if you have voted in any proposals for said DAOs.",
  },
  {
    name: "Mirror Publications",
    icon: PencilIcon,
    description:
      "If writing is your passion, we have all your Mirror writings one place.",
  },
  {
    name: "+ More Soon",
    icon: PlusCircleIcon,
    description: "And many more coming...",
  },
];

export const HomeFeature = () => {
  return (
    <section className="py-24 sm:py-32 lg:py-48">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-md sm:max-w-3xl lg:max-w-7xl text-center">
        <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
          The metaverse gateway
        </h2>
        <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
          1 click to share it all
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          We aggregate all your wallet interactions, on-chain and off-chain.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(feature => {
              return (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root px-6 pb-8 bg-gray-50 rounded-lg">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex justify-center items-center p-3 bg-indigo-500 rounded-md shadow-lg">
                          <feature.icon
                            className="w-6 h-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-2xl font-medium tracking-tight text-gray-900">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
