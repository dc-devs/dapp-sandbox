import CovalentTokenBalance from '../../interfaces/covalent-token-balance-interface';

const filtereTokenBalances = (
	tokenBalances: CovalentTokenBalance[]
): CovalentTokenBalance[] => {
	return tokenBalances.filter((tokenBalance) => {
		const { balance, quote } = tokenBalance;

		return balance !== '0' && quote !== 0;
	});
};

export default filtereTokenBalances;
