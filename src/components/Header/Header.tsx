import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, PlayIcon } from "@heroicons/react/outline";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Fragment } from "react";

import { HeaderSearchBar } from "@/components/HeaderSearchBar";

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

import { NOTION_MANIFESTO_LINK } from "@/const/social";

export const Header = () => {
  return (
    <div className="relative bg-gray-50">
      <Popover className="relative bg-white shadow">
        <div className="px-4 sm:px-6 mx-auto max-w-7xl">
          <div className="flex justify-between md:justify-start items-center py-6 md:space-x-10">
            <div className="flex lg:flex-1 justify-start lg:w-0">
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
            <div className="flex-grow">
              <HeaderSearchBar />
            </div>
            <div className="hidden md:flex md:flex-1 justify-end items-center lg:w-0">
              <HeaderDropdown />
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="md:hidden absolute inset-x-0 top-0 z-10 p-2 transition transform origin-top-right"
          >
            <div className="bg-white rounded-lg divide-y-2 divide-gray-50 ring-1 ring-black ring-opacity-5 shadow-lg">
              <div className="px-5 pt-5 pb-6">
                <div className="flex justify-between items-center">
                  <div />
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-gray-500 bg-white hover:bg-gray-100 rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:outline-none">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={NOTION_MANIFESTO_LINK}
                      className="flex items-center p-3 -m-3 hover:bg-gray-50 rounded-md"
                    >
                      <PlayIcon
                        className="flex-shrink-0 w-6 h-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Manifefsto
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div>
                  <WalletConnect className="flex justify-center items-center py-2 px-4 w-full text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent shadow-sm">
                    Connect Wallet
                  </WalletConnect>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};
