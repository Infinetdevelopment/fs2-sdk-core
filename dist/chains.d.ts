export declare enum ChainId {
    MAINNET = 369,
    TESTNET = 943,
    ETHEREUM = 1,
    GOERLI = 5
}
export declare const SUPPORTED_CHAINS: ChainId[];
export declare type SupportedChainsType = typeof SUPPORTED_CHAINS[number];
export declare enum NativeCurrencyName {
    PULSECHAIN = "PLS",
    ETHER = "ETH"
}
