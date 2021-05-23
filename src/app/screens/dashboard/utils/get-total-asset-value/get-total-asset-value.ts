import BigNumber from 'bignumber.js';
import NomicsTokenData from '../../../../../services/nomics/token-data-interface';
import CovalentTokenBalance from '../../../../../services/covalent/covalent-token-balance-interface';
import getTokenAssetValue from '../../components/token-balance/utils/get-token-asset-value';

interface Props {
	tokenBalances: CovalentTokenBalance[];
	tokenData: NomicsTokenData;
}

const getTotalAssetValue = ({ tokenBalances, tokenData }: Props) => {
	let totalAssetValue = new BigNumber(0);

	if (Object.keys(tokenData).length > 0 && tokenBalances.length > 0) {
		tokenBalances.forEach((tokenBalance) => {
			const {
				balance,
				contract_decimals,
				contract_ticker_symbol,
			} = tokenBalance;
			const singleTokenData = tokenData[contract_ticker_symbol];
			const { price: tokenPrice } = singleTokenData;

			const tokenAssetValue = getTokenAssetValue({
				balance,
				tokenPrice,
				contract_decimals,
			});

			totalAssetValue = totalAssetValue.plus(tokenAssetValue);
		});
	}

	return totalAssetValue;
};

export default getTotalAssetValue;
