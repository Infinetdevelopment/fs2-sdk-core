export enum ChainId {
  MAINNET = 369,
  TESTNET = 943,
  ETHEREUM = 1,
  GOERLI = 5,
}

export const SUPPORTED_CHAINS = [ChainId.MAINNET, ChainId.TESTNET, ChainId.ETHEREUM, ChainId.GOERLI,]

export type SupportedChainsType = typeof SUPPORTED_CHAINS[number]

export enum NativeCurrencyName {
  PULSECHAIN = 'PLS',
  ETHER = 'ETH'
}
