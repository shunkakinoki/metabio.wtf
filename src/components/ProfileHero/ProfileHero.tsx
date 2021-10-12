import type { FC } from "react";

import { useProfileAddressTruncated } from "@/hooks/useProfileAddressTruncated";
import { useProfileEns } from "@/hooks/useProfileEns";

export const ProfileHero: FC = () => {
  const profileAddressTruncated = useProfileAddressTruncated();
  const { profileEns } = useProfileEns();

  return (
    <div className="px-4 sm:px-6 mx-auto max-w-3xl">
      <div className="pt-32 md:pt-40 pb-12 md:pb-20">
        <div className="pb-12 md:pb-16 text-center">
          <h1
            className="mb-4 text-5xl md:text-7xl font-extrabold leading-relaxed text-blueGray-700"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            {profileEns ?? profileAddressTruncated}
          </h1>
        </div>
      </div>
    </div>
  );
};
