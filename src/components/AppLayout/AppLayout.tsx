import type { FC } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const AppLayout: FC = ({ children }) => {
  return (
    <div className="flex overflow-y-scroll flex-col h-screen bg-blueGray-50">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
