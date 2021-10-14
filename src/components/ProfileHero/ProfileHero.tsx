import { useRouter } from "next/router";
import type { FC } from "react";

import { useAddressTruncated } from "@/hooks/useAddressTruncated";
import { useEns } from "@/hooks/useEns";
import { useProfileAddressTruncated } from "@/hooks/useProfileAddressTruncated";
import { useProfileEns } from "@/hooks/useProfileEns";

export const ProfileHero: FC = () => {
  const { asPath } = useRouter();

  const { ens } = useEns();
  const { profileEns } = useProfileEns();
  const addressTruncated = useAddressTruncated();
  const profileAddressTruncated = useProfileAddressTruncated();

  return (
    <div className="px-4 sm:px-6 mx-auto max-w-3xl">
      <div className="pt-20 pb-12 md:pb-20">
        <h1 className="mb-4 text-5xl md:text-7xl font-extrabold leading-relaxed text-center text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
          {asPath.startsWith("/profile")
            ? profileEns ?? profileAddressTruncated
            : ens ?? addressTruncated}
        </h1>
      </div>
    </div>
  );
};
