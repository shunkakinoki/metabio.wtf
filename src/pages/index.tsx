import { HomeHero } from "@/components/HomeHero";

export const Index = (): JSX.Element => {
  return (
    <div className="flex flex-col h-screen bg-blueGray-100">
      <HomeHero />
    </div>
  );
};

export default Index;
