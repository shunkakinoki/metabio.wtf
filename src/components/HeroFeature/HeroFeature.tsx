/* This example requires Tailwind CSS v2.0+ */
import {
  CakeIcon,
  CurrencyRupeeIcon,
  PencilIcon,
  PlusCircleIcon,
  LocationMarkerIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

const features = [
  { name: "NFTs", icon: CakeIcon },
  { name: "POAPs", icon: LocationMarkerIcon },
  { name: "Social Tokens", icon: CurrencyRupeeIcon },
  { name: "DAOs", icon: UserGroupIcon },
  { name: "Mirror Publications", icon: PencilIcon },
  { name: "+ More Soon", icon: PlusCircleIcon },
];

export const HeroFeature = () => {
  return (
    <section className="py-24 sm:py-32 lg:py-48">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-md sm:max-w-3xl lg:max-w-7xl text-center">
        <h2
          data-aos="zoom-y-out"
          data-aos-delay="450"
          className="text-base font-semibold tracking-wider text-indigo-600 uppercase"
        >
          The metaverse gateway
        </h2>
        <p
          data-aos="zoom-y-out"
          data-aos-delay="600"
          className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900"
        >
          1 Click to share it all
        </p>
        <p
          data-aos="zoom-y-out"
          data-aos-delay="600"
          className="mx-auto mt-5 max-w-prose text-xl text-gray-500"
        >
          We aggregate all your wallet interactions, on-chain and off-chain.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              return (
                <div
                  key={feature.name}
                  className="pt-6"
                  data-aos="zoom-y-out"
                  data-aos-delay={`${index * 150 + 150}`}
                >
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
                        Ac tincidunt sapien vehicula erat auctor pellentesque
                        rhoncus. Et magna sit morbi lobortis.
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
