import { FaGithub, FaDiscord, FaTwitter } from "react-icons/fa";

import {
  DISCORD_SOCIAL_LINK,
  TWITTER_SOCIAL_LINK,
  GITHUB_SOCIAL_LINK,
} from "@/const/social";

const navigation = {
  main: [
    {
      name: "Manifesto",
      href: "https://www.notion.so/metafam/Metabio-8746a5dff6ec4746adda5119dd1ec3ec",
    },
  ],
  social: [
    {
      name: "Twitter",
      href: TWITTER_SOCIAL_LINK,
      icon: props => {
        return <FaTwitter {...props} />;
      },
    },
    {
      name: "Discord",
      href: DISCORD_SOCIAL_LINK,
      icon: props => {
        return <FaDiscord {...props} />;
      },
    },
    {
      name: "Github",
      href: GITHUB_SOCIAL_LINK,
      icon: props => {
        return <FaGithub {...props} />;
      },
    },
  ],
};

export const Footer = () => {
  return (
    <footer>
      <div className="overflow-hidden py-12 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <nav
          className="flex flex-wrap justify-center -my-2 -mx-5"
          aria-label="Footer"
        >
          {navigation.main.map(item => {
            return (
              <div key={item.name} className="py-2 px-5">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </div>
            );
          })}
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          {navigation.social.map(item => {
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </a>
            );
          })}
        </div>
        <p className="mt-8 text-base text-center text-gray-400">
          &copy; 2021 Metabio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
