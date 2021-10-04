import { WalletConnect } from "@/components/WalletConnect/WalletConnect";
import { useAddressTruncated } from "@/hooks/useAddressTruncated";
import { useEns } from "@/hooks/useEns";
import { useWeb3 } from "@/hooks/useWeb3";

export const Index = (): JSX.Element => {
  const address = useAddressTruncated();
  const { ens } = useEns();
  const { web3 } = useWeb3();

  return (
    <body className="flex justify-center items-center h-screen bg-black">
      <div className="text-center">
        {web3 && (
          <>
            <h1 className="text-3xl font-bold text-blueGray-50">{address}</h1>
            <h1 className="text-3xl font-bold text-blueGray-50">
              {ens ?? "could not find ens"}
            </h1>
          </>
        )}
        <WalletConnect className="p-3 text-white rounded-lg border">
          Connect Wallet
        </WalletConnect>
      </div>
    </body>
  );
};

export default Index;
