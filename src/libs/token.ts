import { ETHPLORER_BASE_URL } from "@/const/api";
import { fetcher } from "@/libs/fetcher";
import type { Token } from "@/types/token";

export const TOKEN_API_URL = address => {
  return `${ETHPLORER_BASE_URL}/getAddressInfo/${address}?apiKey=${process.env.NEXT_PUBLIC_ETHPLORER_API_KEY}`;
};

export const fetchToken = (address: string): Promise<Token> => {
  return fetcher(TOKEN_API_URL(address));
};
