import { SearchIcon } from "@heroicons/react/solid";
import { utils } from "ethers";
import { useRouter } from "next/router";
import { useState, useCallback } from "react";

export const HeaderSearchBar = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const onChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      if (value.endsWith(".eth")) {
        return router.push(`${value}`);
      }
      if (utils.isAddress(value)) {
        return router.push(`${value}`);
      }
      return;
    },
    [router, value],
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative mt-1 rounded-md shadow-lg">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <SearchIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="text"
          name="address"
          id="address"
          className="block pl-10 w-full sm:text-sm text-gray-800 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Quick search for wallet address or ENS"
          onChange={onChange}
        />
      </div>
    </form>
  );
};
