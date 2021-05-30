import TokenBalance from '../../interfaces/token-balance-interface';

interface Props {
	filterZeros?: boolean;
	balances: TokenBalance[];
}

const filterTokenBalances = ({
	filterZeros = true,
	balances = [],
}: Props): TokenBalance[] => {
	return balances.filter((tokenBalance) => {
		let filter: boolean;

		if (filterZeros) {
			const { balance, totalValue } = tokenBalance;
			filter = balance !== '0.00000000' && totalValue.number !== 0;
		} else {
			filter = true;
		}

		return filter;
	});
};

export default filterTokenBalances;
