import BigNumber from 'bignumber.js';
import getTokenAssetValue from '../get-token-asset-value';
import NomicsTokenData from '../../interfaces/nomics-token-datas-interface';
import CovalentTokenBalance from '../../interfaces/covalent-token-balance-interface';

interface Props {
	tokenBalances: CovalentTokenBalance[];
	tokenData: NomicsTokenData;
}

const getTotalAssetValue = ({ tokenBalances, tokenData }: Props) => {
	let totalAssetValue = new BigNumber(0);

	if (Object.keys(tokenData).length > 0 && tokenBalances.length > 0) {
		tokenBalances.forEach((tokenBalance) => {
			const { balance, contract_decimals, contract_ticker_symbol } =
				tokenBalance;
			const singleTokenData = tokenData[contract_ticker_symbol];

			if (singleTokenData) {
				const { price: tokenPrice } = singleTokenData;

				const tokenAssetValue = getTokenAssetValue({
					balance,
					tokenPrice,
					contract_decimals,
				});

				totalAssetValue = totalAssetValue.plus(tokenAssetValue);
			}
		});
	}

	return totalAssetValue;
};

export default getTotalAssetValue;
