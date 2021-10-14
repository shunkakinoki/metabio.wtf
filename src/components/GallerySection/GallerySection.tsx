import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import type { FC } from "react";

export type GallerySectionProps = {
  title: string;
};

export const GallerySection: FC<GallerySectionProps> = ({
  children,
  title,
}) => {
  return (
    <div className="py-4 mx-auto w-full max-w-5xl">
      <Disclosure>
        {({ open }) => {
          return (
            <>
              <Disclosure.Button className="flex justify-between items-center py-2 px-4 w-full text-sm font-medium text-left text-purple-900 hover:bg-purple-200 bg-gradient-to-r from-rose-100 to-teal-100 rounded-lg focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 duration-300 hover:scale-105 focus:outline-none">
                <span className="text-2xl">{title}</span>
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
