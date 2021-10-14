import { useRouter } from "next/router";
import type { FC } from "react";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";

import { addressAtom } from "@/atoms/address";
import { profileAddressAtom } from "@/atoms/profileAddress";
import { ProfileHeroButton } from "@/components/ProfileHeroButton";
import { useAddressTruncated } from "@/hooks/useAddressTruncated";
import { useEns } from "@/hooks/useEns";
import { useProfileAddressTruncated } from "@/hooks/useProfileAddressTruncated";
import { useProfileEns } from "@/hooks/useProfileEns";

export const ProfileHero: FC = () => {
  const { asPath } = useRouter();

  const { ens } = useEns();
  const { profileEns } = useProfileEns();
  const address = useRecoilValue(addressAtom);
  const addressTruncated = useAddressTruncated();
  const profileAddress = useRecoilValue(profileAddressAtom);
  const profileAddressTruncated = useProfileAddressTruncated();

  const heroAddress = useMemo(() => {
    return asPath.startsWith("/profile")
      ? profileEns ?? profileAddressTruncated
      : ens ?? addressTruncated;
  }, [addressTruncated, asPath, ens, profileAddressTruncated, profileEns]);

  const copyAddress = useMemo(() => {
    return asPath.startsWith("/profile")
      ? profileEns ?? profileAddress
      : ens ?? address;
  }, [address, asPath, ens, profileAddress, profileEns]);

  return (
    <section className="flex justify-center items-center">
      <div className="px-4 sm:px-6 pt-12 pb-20 mx-auto max-w-xl md:max-w-3xl">
        <h1 className="overflow-x-auto pb-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-relaxed text-center text-transparent overflow-ellipsis bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 line-clamp-1">
          {heroAddress}
        </h1>
        <div className="flex justify-center pb-6">
          <ProfileHeroButton value={copyAddress} />
        </div>
      </div>
    </section>
  );
};
