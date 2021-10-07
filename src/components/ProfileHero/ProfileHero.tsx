import type { FC } from "react";

import { useAddressTruncated } from "@/hooks/useAddressTruncated";
import { useEns } from "@/hooks/useEns";

export const ProfileHero: FC = () => {
  const truncatedAddress = useAddressTruncated();
  const { ens } = useEns();

  return (
    <div className="px-4 sm:px-6 mx-auto max-w-3xl">
      <div className="pt-32 md:pt-40 pb-12 md:pb-20">
        <div className="pb-12 md:pb-16 text-center">
          <h1
            className="mb-4 text-5xl md:text-7xl font-extrabold leading-relaxed text-blueGray-700"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            {ens ?? truncatedAddress}
          </h1>
        </div>
      </div>
    </div>
  );
};
