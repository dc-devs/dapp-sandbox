import BigNumber from 'bignumber.js';
import numeral from 'numeral';

const formatBNToUsd = (bigNumber: BigNumber) => {
	return numeral(bigNumber.toString()).format('$0,0.00');
};

export default formatBNToUsd;
