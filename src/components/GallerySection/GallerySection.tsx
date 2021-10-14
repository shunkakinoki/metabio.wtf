import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import type { FC } from "react";

type GalleryKeys = "nft" | "poap" | "token" | "dao" | "mirror";

type Section = Record<GalleryKeys, { name: string; emoji: string }>;

export type GallerySectionProps = {
  type: GalleryKeys;
};

const sections: Section = {
  nft: {
    name: "NFTs",
    emoji: "🎨",
  },
  poap: {
    name: "POAPs",
    emoji: "📍",
  },
  token: {
    name: "Social Tokens",
    emoji: "🤑",
  },
  dao: {
    name: "DAO Votes",
    emoji: "🕍",
  },
  mirror: {
    name: "Mirror Publications",
    emoji: "📝",
  },
};

export const GallerySection: FC<GallerySectionProps> = ({ children, type }) => {
  return (
    <div className="py-4 mx-auto w-full max-w-5xl">
      <Disclosure>
        {({ open }) => {
          return (
            <>
              <Disclosure.Button
                className={clsx(
                  "flex justify-between items-center py-2 px-4 w-full text-sm font-medium text-left text-purple-900 hover:bg-purple-200 rounded-lg focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 duration-300 hover:scale-105 focus:outline-none",
                  type === "nft" &&
                    "bg-gradient-to-r from-red-200 via-red-300 to-yellow-200",
                  type === "poap" &&
                    "bg-gradient-to-r from-sky-400 via-rose-200 to-lime-200",
                  type === "token" &&
                    "bg-gradient-to-r from-teal-200 to-lime-200",
                  type === "dao" &&
                    "bg-gradient-to-r from-rose-100 to-teal-100 ",
                  type === "mirror" &&
                    "bg-gradient-to-r from-gray-300 to-yellow-100",
                )}
              >
                <h1 className="flex items-center text-lg md:text-3xl font-extrabold leading-relaxed text-blueGray-700">
                  {sections[type].name}&ensp;
                  <span role="img" aria-label="sheep">
                    {sections[type].emoji}
                  </span>
                </h1>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-teal-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div className="grid">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 p-8 ">
                    {children}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          );
        }}
      </Disclosure>
    </div>
  );
};
