import type { FC } from "react";

import { Header } from "@/components/Header";

export const AppLayout: FC = ({ children }) => {
  return (
    <div className="flex flex-col bg-blueGray-100">
      <Header />
      {children}
    </div>
  );
};
