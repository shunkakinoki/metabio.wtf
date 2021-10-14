import { API_WALLET_PATH } from "@/const/api";
import { fetcher } from "@/libs/fetcher";

export const WALLET_PINS_URL = (address: string) => {
  return `${API_WALLET_PATH}/${address}`;
};

export const fetchWallet = (address: string) => {
  return fetcher(WALLET_PINS_URL(address), {
    headers: new Headers({ "content-type": "application/json" }),
    method: "POST",
  });
};
