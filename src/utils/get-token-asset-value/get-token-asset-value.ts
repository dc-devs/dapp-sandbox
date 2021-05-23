import BigNumber from 'bignumber.js';

interface Props {
	balance: string;
	tokenPrice: string;
	contract_decimals: number;
}

const getTokenAssetValue = ({
	balance,
	tokenPrice,
	contract_decimals,
}: Props) => {
	const balanceBN = new BigNumber(balance);
	const balanceETHBN = balanceBN.shiftedBy(-contract_decimals);

	return balanceETHBN.multipliedBy(tokenPrice);
};

export default getTokenAssetValue;
