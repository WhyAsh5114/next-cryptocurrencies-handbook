class Token {
    name: string;
    abbreviation: string;
    token_address: string;
    logo: string;
    description: string;
    tags: string[];
    website: string;

    constructor(name: string, abbreviation: string, token_address: string, logo: string, description: string, tags: string[], website: string) {
        this.name = name;
        this.abbreviation = abbreviation;
        this.token_address = token_address
        this.logo = logo;
        this.description = description;
        this.tags = tags;
        this.website = website;
    }
}

const database = {
    GUSD: new Token(
        "Gemini USD",
        "GUSD",
        "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd",
        "https://cryptologos.cc/logos/gemini-dollar-gusd-logo.png?v=022",
        "A stablecoin offering from Gemini (a cryptocurrency exchange), which is backed by normal USD in a 1:1 ratio, its supported on many exchanges and Dapps, available on the Ethereum blockchain. According to their website, GUSD is transparently audited, regulated, insured and secure. It has zero fees when buying or selling with normal USD on the Gemini Exchange.",
        ["Stablecoin", "Multi-chain DeFi"],
        "https://www.gemini.com/dollar/"
    ),
    DAI: new Token(
        "Dai Stablecoin",
        "DAI",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=022",
        "DAI is a stablecoin offering from MakerDAO, it's commonly used on all Dapps and exchanges. Unlike traditional stablecoins backed by USD in a 1:1 ratio, DAI is backed by regular cryptocurrencies like Ethereum, to account for the volatility in prices of crypto, it is over-collaterised, which helps it maintain its 1:1 peg with the US Dollar, because its backed by a DAO and not a company, it is supposed to be more decentralized.",
        ["Stablecoin", "Multi-chain DeFi"],
        "https://makerdao.com/en/"
    ),
    BUSD: new Token(
        "Binance USD",
        "BUSD",
        "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
        "https://cryptologos.cc/logos/binance-usd-busd-logo.png?v=022",
        "BUSD is a stablecoin offering from Binance, one of the biggest and well known cryptocurrency exchanges, this token is extremely prevalent on the Binance Smart Chain (BSC) and is pegged to the US Dollar in a 1:1 ratio, backed by normal (fiat) USD. According to their website it's fully regulated.",
        ["Stablecoin", "Multi-chain DeFi"],
        "https://www.binance.us/en/busd/"
    ),
    USDT: new Token(
        "USD Tether",
        "USDT",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        "https://cryptologos.cc/logos/tether-usdt-logo.png?v=022",
        "One of the most commonly used stablecoins spanning across multiple blockchains is USDT, its parent company is Tether. According to the website, USDT is pegged to the US Dollar in a 1:1 ratio and fully backed and transparent, but there have been multiple instances of Tether being uncomfortable to share its reserves in the past and is not considered safe by some crypto enthusiasts. Despite all that, it is the most commonly used (for now), and also prevalent in multiple blockchains.",
        ["Stablecoin", "Multi-chain DeFi"],
        "https://tether.to/en/"
    ),
    DOGE: new Token(
        "Dogecoin",
        "DOGE",
        "",
        "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=022",
        "Dogecoin is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system as a joke, making fun of the wild speculation in cryptocurrencies at the time. It is considered both the first meme coin, and, more specifically, the first dog coin.",
        ["Memecoin"],
        "https://dogecoin.com/"
    ),
    USDC: new Token(
        "USD Coinbase",
        "USDC",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=022",
        "USDC is a stablecoin from Coinbase. You can always redeem 1 USD Coin for US$1.00, giving it a stable price. On Coinbase, eligible customers can earn rewards for every USD Coin they hold. USDC is one of the most commonly seen stablecoins on different blockchains, it is also considered more stable and secure by crypto enthusiasts and is 100% backed according to coinbase.",
        ["Stablecoin", "Multi-chain DeFi"],
        "https://www.coinbase.com/usdc/"
    ),
    ETH: new Token(
        "Ethereum",
        "ETH",
        "",
        "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022",
        "Ethereum is the community-run technology powering the cryptocurrency ether (ETH) and thousands of decentralized applications. The 2nd-generation blockchain which supports smart contracts. Smart contracts allow us to deal with tokens and transact using programming. This opens up lots of different opportunities, like decentralized finance, programmable trustless smart contracts.",
        ["Blockchain", "DeFi"],
        "https://ethereum.org/"
    ),
    SOL: new Token(
        "Solana",
        "SOL",
        "",
        "https://cryptologos.cc/logos/solana-sol-logo.png?v=022",
        "Solana is a decentralized blockchain built to enable scalable, user-friendly apps for the world. It's also referred to as the 3rd generation of blockchain as its extremely fast and even cheaper than Polygon MATIC, its based on the consensus mechanism of PoH (Proof of History) which is faster and cheaper than PoW (Proof of Work). Solana also has its drawbacks, its not as decentralized as something like Ethereum and has had some shutdowns in the past. It's lack of nodes is... concerning to say the least.",
        ["Blockchain", "DeFi"],
        "https://solana.com/"
    ),
    MATIC: new Token(
        "Polygon",
        "MATIC",
        "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
        "https://cryptologos.cc/logos/polygon-matic-logo.png?v=022",
        "Polygon was originally a layer 2 solution to Ethereum, i.e. it was an alternate blockchain where we could perform many transactions with low gas fees, but eventually it grew an ecosystem of Dapps on its own and is now filled with tons of opportunities. Transactions on Polygon have a fee of less than a dollar, therefore we can move our funds around as much as we need without losing money to gas fees. Many big Dapps and DAOs have released a Polygon platform like Curve, Aave and Balancer.",
        ["Blockchain", "DeFi", "Ethereum Layer 2"],
        "https://polygon.technology"
    ),
    BTC: new Token(
        "Bitcoin",
        "BTC",
        "",
        "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=022",
        "Bitcoin, the original peer-to-peer cryptocurrency. Its origins lie in a resource paper published under a pseudonym of Satoshi Nakamoto. It was the first ever cryptocurrency, which facilitated trustless transactions amongst peers. Its the 1st generation blockchain and doesn't have smart contracts like Ethereum, the value of Bitcoin exists because Bitcoin is finite in supply and is considered like digital gold.",
        ["Blockchain", "Bitcoin"],
        "https://bitcoin.org/en/"
    )
}

export default function search(query: string) {
    let matched_coins: Array<Token> = [];
    for (let [index, coin] of Object.entries(database)) {
        if (coin.abbreviation.toLowerCase().includes(query.toLowerCase()) || coin.name.toLowerCase().includes(query.toLowerCase())) {
            matched_coins.push(coin);
        }
    }
    return matched_coins;
}

export function match(query: string) {
    let matched_coin: Token = new Token("", "", "", "", "", [""], "");
    for (let [index, coin] of Object.entries(database)) {
        if (coin.name === (query)) {
            matched_coin = coin;
            break;
        }
    }
    return matched_coin;
}
