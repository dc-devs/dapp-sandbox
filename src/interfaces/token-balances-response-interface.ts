import TokenBalance from './token-balance-interface';

interface TotalValue {
	string: string;
	formatted: string;
}

interface TokenBalancesResponse {
	totalValue: TotalValue;
	balances: TokenBalance[];
}

export default TokenBalancesResponse;
