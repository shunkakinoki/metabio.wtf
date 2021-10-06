import type { OpenseaAsset } from "@/types/opensea";

export const fetchOpenseaAssets = async (
  owner: string | null,
  offset = 0,
): Promise<OpenseaAsset[]> => {
  try {
    const result = await fetch(
      `https://api.opensea.io/api/v1/assets?owner=${owner}&limit=50&offset=${offset}`,
    );
    if (result.status !== 200) {
      const error = await result.text();
      throw new Error(error);
    }
    const { assets } = await result.json();
    return assets;
  } catch (error) {
    console.error("fetchAssets failed:", error);
    return [];
  }
};
