import { WalletConnect } from "@/components/WalletConnect/WalletConnect";

export const Index = (): JSX.Element => {
  return (
    <body className="flex justify-center items-center h-screen bg-black">
      <div className="text-center">
        <WalletConnect className="p-3 text-white rounded-lg border">
          Connect Wallet
        </WalletConnect>
      </div>
    </body>
  );
};

export default Index;
