import type { FC } from "react";

import { HomeFeature } from "@/components/HomeFeature";
import { HomeHero } from "@/components/HomeHero";

export const HomeScreen: FC = () => {
  return (
    <>
      <HomeHero />
      <HomeFeature />
    </>
  );
};
