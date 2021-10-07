export interface Token {
  address: string;
  ETH: ETH;
  countTxs: number;
  tokens?: TokensEntity[] | null;
}

export interface ETH {
  price: Price;
  balance: number;
  rawBalance: string;
}

export interface Price {
  rate: number;
  diff: number;
  diff7d: number;
  ts: number;
  marketCapUsd: number;
  availableSupply: number;
  volume24h: number;
  diff30d: number;
  volDiff1: number;
  volDiff7: number;
  volDiff30: number;
}

export interface TokensEntity {
  tokenInfo: TokenInfo;
  balance: number;
  totalIn: number;
  totalOut: number;
  rawBalance: string;
}

export interface TokenInfo {
  address: string;
  name: string;
  owner?: string | null;
  symbol: string;
  totalSupply?: string | null;
  lastUpdated?: number | null;
  slot?: number | null;
  storageTotalSupply?: string | null;
  issuancesCount: number;
  holdersCount: number;
  ethTransfersCount?: number | null;
  decimals?: string | null;
  price: boolean;
  website?: string | null;
  twitter?: string | null;
  image?: string | null;
  coingecko?: string | null;
}
