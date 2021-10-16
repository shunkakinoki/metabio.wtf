import useSWR from "swr";

import { PIN_SWR } from "@/const/swr";
import { useSwrPath } from "@/hooks/useSwrPath";
import { fetchPins } from "@/libs/pin";
import { removeSwrPath } from "@/libs/utils";
import type { Pin } from "@/types/pin";

export const usePins = () => {
  const key = useSwrPath(PIN_SWR);

  const { data, error } = useSWR<{ data: Pin[] }>(key, profileAddress => {
    return fetchPins(removeSwrPath(PIN_SWR, profileAddress));
  });

  return {
    isLoading: !error && !data,
    isError: !!error,
    pins: data?.data?.filter(pin => {
      return pin.index;
    }) as Pin[],
  };
};
