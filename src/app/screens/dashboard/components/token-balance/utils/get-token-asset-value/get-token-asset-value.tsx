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
	return balanceBN.shiftedBy(-contract_decimals).multipliedBy(tokenPrice);
};

export default getTokenAssetValue;
