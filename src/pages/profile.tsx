import { ProfileHero } from "@/components/ProfileHero";
import { WalletConnect } from "@/components/WalletConnect/WalletConnect";
import { useAddressTruncated } from "@/hooks/useAddressTruncated";
import { useEns } from "@/hooks/useEns";

export const Profile = (): JSX.Element => {
  const address = useAddressTruncated();
  const { ens } = useEns();

  return (
    <div className="flex flex-col h-screen bg-blueGray-100">
      {address && <ProfileHero ens={ens} address={address} />}
      <WalletConnect className="p-3 text-white rounded-lg border">
        Connect Wallet
      </WalletConnect>
    </div>
  );
};

export default Profile;
