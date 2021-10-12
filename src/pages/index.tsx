import type { ReactElement } from "react";

import { AppLayout } from "@/components/AppLayout";
import { HomeScreen } from "@/components/HomeScreen";

export const Index = (): JSX.Element => {
  return <HomeScreen />;
};

export default Index;

Index.getLayout = (page: ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};
