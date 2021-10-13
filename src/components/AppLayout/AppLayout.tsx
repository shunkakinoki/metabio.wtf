import type { FC } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const AppLayout: FC = ({ children }) => {
  return (
    <div className="flex flex-col bg-blueGray-50">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
