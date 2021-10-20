import { Popover, Transition } from "@headlessui/react";
import { XIcon, UserIcon, PencilIcon } from "@heroicons/react/outline";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Fragment } from "react";

import { HeaderSearchBar } from "@/components/HeaderSearchBar";
import { useWeb3Provider } from "@/hooks/useWeb3Provider";

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

export const HeaderMobileMenu = () => {
  const { web3Provider } = useWeb3Provider();

  return (
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
              <HeaderSearchBar />
            </div>
            <div className="mt-8">
              <nav className="grid gap-y-8">
                {web3Provider && (
                  <>
                    <Link passHref href="/profile">
                      <a className="flex items-center p-3 -m-3 hover:bg-gray-50 rounded-md">
                        <UserIcon
                          className="flex-shrink-0 w-6 h-6 text-indigo-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          View Profile
                        </span>
                      </a>
                    </Link>
                    <Link passHref href="/profile/edit">
                      <a className="flex items-center p-3 -m-3 hover:bg-gray-50 rounded-md">
                        <PencilIcon
                          className="flex-shrink-0 w-6 h-6 text-indigo-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Edit Profile
                        </span>
                      </a>
                    </Link>
                  </>
                )}
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
  );
};
