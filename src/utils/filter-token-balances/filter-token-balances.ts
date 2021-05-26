import CovalentTokenBalance from '../../interfaces/covalent-token-balance-interface';

interface Props {
	filterZeros?: boolean;
	tokenBalances: CovalentTokenBalance[];
}

const filterTokenBalances = ({
	filterZeros = true,
	tokenBalances,
}: Props): CovalentTokenBalance[] => {
	return tokenBalances.filter((tokenBalance) => {
		let filter: boolean;

		if (filterZeros) {
			const { balance, quote } = tokenBalance;
			filter = balance !== '0' && quote !== 0;
		} else {
			filter = true;
		}

		return filter;
	});
};

export default filterTokenBalances;
