import type { FC } from "react";
import { FaGithub, FaDiscord, FaTwitter } from "react-icons/fa";

import {
  DISCORD_SOCIAL_LINK,
  TWITTER_SOCIAL_LINK,
  GITHUB_SOCIAL_LINK,
  NOTION_MANIFESTO_LINK,
  TWITTER_SHUN_LINK,
  TWITTER_JUAN_LINK,
} from "@/const/social";
import packageJson from "@/packageJson";

const navigation = {
  main: [
    {
      name: "Manifesto",
      href: NOTION_MANIFESTO_LINK,
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

export type FooterLinkProps = {
  href: string;
};

export const FooterLink: FC<FooterLinkProps> = ({ children, href }) => {
  return (
    <a
      className="hover:text-warmGray-600 dark:hover:text-warmGray-300 hover:underline"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
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
          <FooterLink href={GITHUB_SOCIAL_LINK}>
            v{packageJson.version}.
          </FooterLink>{" "}
          &copy; 2021 Metabio. All rights reserved.
        </p>
        <p className="mt-1 text-base text-center text-gray-400">
          by <FooterLink href={TWITTER_SHUN_LINK}>@shunkakinoki</FooterLink>{" "}
          <FooterLink href={TWITTER_JUAN_LINK}>@Juan_Barrero97</FooterLink>{" "}
        </p>
      </div>
    </footer>
  );
};
