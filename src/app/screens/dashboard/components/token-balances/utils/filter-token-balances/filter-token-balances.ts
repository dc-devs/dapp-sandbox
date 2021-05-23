import CovalentTokenBalance from '../../../../../../../services/covalent/covalent-token-balance-interface';

const filtereTokenBalances = (
	tokenBalances: CovalentTokenBalance[]
): CovalentTokenBalance[] => {
	return tokenBalances.filter((tokenBalance) => {
		const { balance } = tokenBalance;
		return balance !== '0';
	});
};

export default filtereTokenBalances;
