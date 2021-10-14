import type { FC } from "react";

import { AppLayout } from "@/components/AppLayout";
import { Error } from "@/components/Error";

export const ErrorScreen: FC = () => {
  return (
    <AppLayout>
      <Error />
    </AppLayout>
  );
};
