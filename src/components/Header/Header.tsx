import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";

import dynamic from "next/dynamic";
import Link from "next/link";

import { HeaderSearchBar } from "@/components/HeaderSearchBar";

const HeaderDropdown = dynamic(
  () => {
    return import("@/components/HeaderDropdown").then(mod => {
      return mod.HeaderDropdown;
    });
  },
  {
    ssr: false,
  },
);

const HeaderMobileMenu = dynamic(
  () => {
    return import("@/components/HeaderMobileMenu").then(mod => {
      return mod.HeaderMobileMenu;
    });
  },
  {
    ssr: false,
  },
);

export const Header = () => {
  return (
    <div className="bg-gray-50">
      <Popover className="bg-white shadow">
        <div className="px-4 sm:px-6 mx-auto max-w-7xl">
          <div className="flex justify-between md:justify-start items-center py-6 md:space-x-10">
            <div className="flex justify-start">
              <Link passHref href="/">
                <a>
                  <span className="sr-only">Metabio</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-auto h-8 sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </a>
              </Link>
            </div>
            <div className="md:hidden -my-2 -mr-2">
              <Popover.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-gray-500 bg-white hover:bg-gray-100 rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:outline-none">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:flex md:flex-grow">
              <HeaderSearchBar />
            </div>
            <div className="hidden md:flex md:flex-shrink justify-end items-center">
              <HeaderDropdown />
            </div>
          </div>
        </div>
        <HeaderMobileMenu />
      </Popover>
    </div>
  );
};
