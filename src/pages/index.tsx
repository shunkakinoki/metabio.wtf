import { WalletConect } from "@/components/WalletConect/WalletConect";

export const Index = (): JSX.Element => {
  return (
    <body className="flex justify-center items-center h-screen bg-black">
      <div className="text-center">
        <WalletConect className="p-3 text-white rounded-lg border">
          Connect Wallet
        </WalletConect>
      </div>
    </body>
  );
};

export default Index;
