import { OPENSEA_BASE_URL } from "@/const/api";
import { fetcher } from "@/libs/fetcher";
import type { OpenseaAsset } from "@/types/opensea";

const ASSETS = "/assets?&limit=30&owner=";

export const OPENSEA_API_URL = (address: string) => {
  return OPENSEA_BASE_URL + ASSETS + address;
};

export const fetchOpenseaAssets = (
  address: string,
): Promise<{ assets: OpenseaAsset[] }> => {
  return fetcher(OPENSEA_API_URL(address));
};
