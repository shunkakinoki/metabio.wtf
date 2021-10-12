import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import dynamic from "next/dynamic";
import { Fragment } from "react";

import { useProfileAddress } from "@/hooks/useProfileAddress";
import { useProfileAddressTruncated } from "@/hooks/useProfileAddressTruncated";
import { useProfileEns } from "@/hooks/useProfileEns";
import { useWeb3Modal } from "@/hooks/useWeb3Modal";
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

export const HeaderDropdown = () => {
  const { web3Provider, setWeb3Provider } = useWeb3Provider();
  const { setProfileAddress } = useProfileAddress();
  const { profileEns, setProfileEns } = useProfileEns();
  const profileAddressTruncated = useProfileAddressTruncated();
  const web3Modal = useWeb3Modal();

  const disconnectWallet = () => {
    web3Modal.clearCachedProvider();
    setWeb3Provider(null);
    setProfileAddress("");
    setProfileEns("");
  };

  if (!web3Provider) {
    return (
      <WalletConnect className="inline-flex justify-center items-center py-2 px-4 ml-4 text-base font-medium text-white whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent shadow-sm">
        Connect Wallet
      </WalletConnect>
    );
  }
  return (
    <Menu as="div" className="inline-block relative text-left">
      <div>
        <Menu.Button className="inline-flex justify-center items-center py-2 px-4 ml-4 text-base font-medium text-white whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent shadow-sm">
          {profileEns ?? profileAddressTruncated}
          <ChevronDownIcon
            className="-mr-1 ml-2 w-5 h-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 bg-white rounded-md divide-y divide-gray-100 ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right focus:outline-none">
          <div className="py-1 px-1">
            <Menu.Item>
              {({ active }) => {
                return (
                  // eslint-disable-next-line @next/next/no-html-link-for-pages
                  <a
                    href="/profile"
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ViewActiveIcon
                        className="mr-2 w-5 h-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ViewInactiveIcon
                        className="mr-2 w-5 h-5"
                        aria-hidden="true"
                      />
                    )}
                    View
                  </a>
                );
              }}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => {
                return (
                  // eslint-disable-next-line @next/next/no-html-link-for-pages
                  <a
                    href="/profile/edit"
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <EditActiveIcon
                        className="mr-2 w-5 h-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 w-5 h-5"
                        aria-hidden="true"
                      />
                    )}
                    Edit
                  </a>
                );
              }}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => {
                return (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <DuplicateActiveIcon
                        className="mr-2 w-5 h-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <DuplicateInactiveIcon
                        className="mr-2 w-5 h-5"
                        aria-hidden="true"
                      />
                    )}
                    Copy profile link
                  </button>
                );
              }}
            </Menu.Item>
          </div>
          <div className="py-1 px-1">
            <Menu.Item>
              {({ active }) => {
                return (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    onClick={disconnectWallet}
                  >
                    {active ? (
                      <MoveActiveIcon
                        className="mr-2 w-5 h-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <MoveInactiveIcon
                        className="mr-2 w-5 h-5"
                        aria-hidden="true"
                      />
                    )}
                    Disconnect Wallet
                  </button>
                );
              }}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const EditInactiveIcon = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
};

const EditActiveIcon = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
};

const DuplicateInactiveIcon = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
};

const DuplicateActiveIcon = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
};

const MoveInactiveIcon = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
};

const MoveActiveIcon = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
};

const ViewActiveIcon = props => {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="#C4B5FD"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        stroke="#C4B5FD"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );
};

const ViewInactiveIcon = props => {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="#A78BFA"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        stroke="#A78BFA"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );
};
