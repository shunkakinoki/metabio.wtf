import type { FC } from "react";

import { useProfileAddressTruncated } from "@/hooks/useProfileAddressTruncated";
import { useProfileEns } from "@/hooks/useProfileEns";

export const ProfileHero: FC = () => {
  const profileAddressTruncated = useProfileAddressTruncated();
  const { profileEns } = useProfileEns();

  return (
    <div className="px-4 sm:px-6 mx-auto max-w-3xl">
      <div className="pt-20 pb-12 md:pb-20">
        <h1 className="mb-4 text-5xl md:text-7xl font-extrabold leading-relaxed text-center text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
          {profileEns ?? profileAddressTruncated}
        </h1>
      </div>
    </div>
  );
};
