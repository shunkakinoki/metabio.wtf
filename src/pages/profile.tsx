import { ProfileHero } from "@/components/ProfileHero";
import { useAddressTruncated } from "@/hooks/useAddressTruncated";
import { useEns } from "@/hooks/useEns";

export const Profile = (): JSX.Element => {
  const address = useAddressTruncated();
  const { ens } = useEns();

  return (
    <div className="flex flex-col h-screen bg-blueGray-100">
      {address && <ProfileHero ens={ens} address={address} />}
    </div>
  );
};

export default Profile;
