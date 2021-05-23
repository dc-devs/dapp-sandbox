import { BigNumber } from 'bignumber.js';

const format = {
	prefix: '',
	decimalSeparator: '.',
	groupSeparator: ',',
	groupSize: 3,
	secondaryGroupSize: 0,
	fractionGroupSeparator: ' ',
	fractionGroupSize: 0,
	suffix: '',
};

const getFormattedTokenBalance = (
	balance: string,
	contractDecimals: number
) => {
	BigNumber.config({ FORMAT: format });

	const balanceBN = new BigNumber(balance);
	const tokenBalanceAmount = balanceBN
		.shiftedBy(-contractDecimals)
		.toFormat(8);

	return tokenBalanceAmount.toString();
};

export default getFormattedTokenBalance;
