import { API_PINS_PATH } from "@/const/api";
import { fetcher } from "@/libs/fetcher";
// import type { GalleryKeys } from "@/types/gallery";

export const API_PINS_URL = (address: string) => {
  return `${API_PINS_PATH}/${address}`;
};

export const fetchPins = (address: string) => {
  return fetcher(API_PINS_URL(address), {
    headers: new Headers({ "content-type": "application/json" }),
    method: "GET",
  });
};

export const createPin = (address, { type, index }) => {
  return fetcher(API_PINS_URL(address), {
    headers: new Headers({ "content-type": "application/json" }),
    method: "POST",
    body: JSON.stringify({ type, index }),
  });
};
