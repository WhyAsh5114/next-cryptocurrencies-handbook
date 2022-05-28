class Token {
    name: string;
    abbreviation: string;
    token_address: string;
    logo: string;
    description: string;
    tags: string[];

    constructor (name: string, abbreviation: string, token_address: string, logo: string, description: string, tags: string[]) {
        this.name = name;
        this.abbreviation = abbreviation;
        this.token_address = token_address
        this.logo = logo;
        this.description = description;
        this.tags = tags;
    }
}

const database = {
    GUSD : new Token(
        "Gemini USD",
        "GUSD",
        "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd",
        "https://cryptologos.cc/logos/gemini-dollar-gusd-logo.png?v=022",
        "",
        ["Stablecoin", "Multi-chain DeFi"]
    ),
    DAI : new Token(
        "Dai Stablecoin",
        "DAI",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=022",
        "",
        ["Stablecoin", "Multi-chain DeFi"]
    ),
    BUSD : new Token(
        "Binance USD",
        "BUSD",
        "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
        "https://cryptologos.cc/logos/binance-usd-busd-logo.png?v=022",
        "",
        ["Stablecoin", "Multi-chain DeFi"]
    ),
    USDT : new Token(
        "USD Tether",
        "USDT",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        "https://cryptologos.cc/logos/tether-usdt-logo.png?v=022",
        "",
        ["Stablecoin", "Multi-chain DeFi"]
    ),
    USDC : new Token(
        "USD Coinbase",
        "USDC",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=022",
        "",
        ["Stablecoin", "Multi-chain DeFi"]
    ),
    ETH : new Token(
        "Ethereum",
        "ETH",
        "",
        "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022",
        "",
        ["Blockchain", "DeFi"]
    ),
    SOL : new Token(
        "Solana",
        "SOL",
        "",
        "https://cryptologos.cc/logos/solana-sol-logo.png?v=022",
        "",
        ["Blockchain", "DeFi"]
    ),
    AVAX : new Token(
        "Avalanche",
        "AVAX",
        "",
        "https://cryptologos.cc/logos/avalanche-avax-logo.png?v=022",
        "",
        ["Blockchain", "DeFi"]
    ),
    ADA : new Token(
        "Cardano",
        "ADA",
        "",
        "https://cryptologos.cc/logos/cardano-ada-logo.png?v=022",
        "",
        ["Blockchain"]
    ),
    MATIC : new Token(
        "Polygon",
        "MATIC",
        "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
        "https://cryptologos.cc/logos/polygon-matic-logo.png?v=022",
        "",
        ["Blockchain", "DeFi", "Ethereum Layer 2"]
    ),
    BTC : new Token(
        "Bitcoin",
        "BTC",
        "",
        "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=022",
        "",
        ["Blockchain", "Bitcoin"]
    ),
    UNI : new Token(
        "Uniswap",
        "UNI",
        "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
        "https://cryptologos.cc/logos/uniswap-uni-logo.png?v=022",
        "",
        ["Ethereum DeFi", "Liquidity Protocol"]
    )
}

export default function search(query: string) {
    let matched_coins: Array<Token> = [];
    for (let [index, coin] of Object.entries(database)) {
        for (let [property, property_value] of Object.entries(coin)) {
            if (property_value.includes(query)) {
                matched_coins.push(coin);
                break;
            }
        }
    }
    return matched_coins;
}