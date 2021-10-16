/* eslint-disable no-unused-vars */

import { API_PINS_PATH } from "@/const/api";
import { fetcher } from "@/libs/fetcher";
import type { Pin } from "@/types/pin";
// import type { GalleryKeys } from "@/types/gallery";

export const API_PINS_URL = (address: string) => {
  return `${API_PINS_PATH}/${address}`;
};

export const fetchPins = (address: string): Promise<{ data: Pin[] }> => {
  return fetcher(API_PINS_URL(address), {
    headers: new Headers({ "content-type": "application/json" }),
    method: "GET",
  });
};

export const createPin: (
  address: string,
  { type, index, value, src }: Pin,
) => Promise<Pin> = (address, { type, index, value, src }) => {
  return fetcher(API_PINS_URL(address), {
    headers: new Headers({ "content-type": "application/json" }),
    method: "POST",
    body: JSON.stringify({ type, index, value, src }),
  });
};
