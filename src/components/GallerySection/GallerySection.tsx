import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import type { FC } from "react";

import type { GalleryKeys } from "@/types/gallery";

export type GallerySectionKeys = GalleryKeys | "pin";

type Section = Record<GallerySectionKeys, { name: string; emoji: string }>;

export type GallerySectionProps = {
  defaultOpen?: boolean;
  type: GallerySectionKeys;
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
  pin: {
    name: "Pinned",
    emoji: "🏆",
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

export const GallerySectionLayout: FC = ({ children }) => {
  return (
    <div className="grid">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 py-3">
        {children}
      </div>
    </div>
  );
};

export const GallerySection: FC<GallerySectionProps> = ({
  children,
  type,
  defaultOpen = false,
}) => {
  return (
    <div className="py-2 sm:py-3 md:py-4 px-2 sm:px-3 md:px-4 mx-auto w-full max-w-5xl">
      <Disclosure defaultOpen={defaultOpen}>
        {({ open }) => {
          return (
            <>
              <Disclosure.Button
                className={clsx(
                  "flex justify-between items-center py-2 px-4 w-full text-sm font-medium text-left text-purple-900 hover:bg-purple-200 rounded-lg focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 duration-300 hover:scale-105 focus:outline-none",
                  type === "pin" &&
                    "bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400",
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
                <h1 className="flex items-center text-lg md:text-3xl font-extrabold leading-relaxed text-blueGray-800">
                  {sections[type].name}&ensp;
                  <span role="img" aria-label="sheep">
                    {sections[type].emoji}
                  </span>
                </h1>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-coolGray-800`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-500">
                <GallerySectionLayout>{children}</GallerySectionLayout>
              </Disclosure.Panel>
            </>
          );
        }}
      </Disclosure>
    </div>
  );
};
