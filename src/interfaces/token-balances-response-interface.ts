import TokenBalance from './token-balance-interface';

interface TokenBalancesResponse {
	totalValue: string;
	balances: TokenBalance[];
}

export default TokenBalancesResponse;
