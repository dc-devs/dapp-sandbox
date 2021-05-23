interface TokenPrice {
	number: number;
	string: string;
	formatted: string;
}

interface TotalAssetValue {
	number: number;
	string: string;
	formatted: string;
}

interface TokenDisplayData {
	tokenName: string;
	tokenSymbol: string;
	tokenBalance: string;
	tokenLogoUrl: string;
	tokenPrice: TokenPrice;
	tokenContractAddress: string;
	totalAssetValue: TotalAssetValue;
}

export default TokenDisplayData;
