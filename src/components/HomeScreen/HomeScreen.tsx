import type { FC } from "react";

import { HeroFeature } from "@/components/HeroFeature";
import { HomeHero } from "@/components/HomeHero";

export const HomeScreen: FC = () => {
  return (
    <>
      <HomeHero />
      <HeroFeature />
    </>
  );
};
