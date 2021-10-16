import { ethers } from "ethers";

export const lookupEnsAddress = async (
  address: string,
): Promise<string | null> => {
  try {
    const provider = new ethers.providers.CloudflareProvider();
    const ens = await provider.lookupAddress(address);
    return ens;
  } catch (error) {
    return null;
  }
};

export const resolveEnsName = async (
  ensName: string,
): Promise<string | null> => {
  try {
    const provider = new ethers.providers.CloudflareProvider();
    const address = await provider.resolveName(ensName);
    return address;
  } catch (error) {
    return null;
  }
};
