import type { FC } from "react";

import { HomeFace } from "@/components/HomeFace";
import { HomeFeature } from "@/components/HomeFeature";
import { HomeHero } from "@/components/HomeHero";

export const HomeScreen: FC = () => {
  return (
    <>
      <HomeHero />
      <HomeFace />
      <HomeFeature />
    </>
  );
};
