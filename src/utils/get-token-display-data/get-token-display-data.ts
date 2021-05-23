import numeral from 'numeral';
import formatBnToString from '../format-bn-to-string';
import formatBnToFiatValue from '../format-bn-to-fiat';
import getTokenAssetValue from '../get-token-asset-value';
import getFormattedTokenBalance from '../get-formatted-token-balance';
import NomicsTokenDatas from '../../interfaces/nomics-token-datas-interface';
import CovalentTokenBalance from '../../interfaces/covalent-token-balance-interface';
import TokenDisplayData from '../../interfaces/token-display-data-interface';

interface AssetData {
	tokenData: NomicsTokenDatas;
	tokenBalances: CovalentTokenBalance[];
}

const getTokenDisplayData = ({
	tokenData,
	tokenBalances,
}: AssetData): TokenDisplayData[] => {
	return tokenBalances.map((tokenBalance) => {
		const {
			balance,
			logo_url,
			contract_name,
			contract_address,
			contract_decimals,
			contract_ticker_symbol,
		} = tokenBalance;
		const tokenLogoUrl = logo_url;
		const tokenName = contract_name;
		const tokenSymbol = contract_ticker_symbol.toUpperCase();
		const selectedTokenData = tokenData[tokenSymbol];

		const tokenBalanceAmountFormatted = getFormattedTokenBalance(
			balance,
			contract_decimals
		);

		const tokenPrice = selectedTokenData?.price || '0';
		const tokenPriceFormatted = numeral(tokenPrice).format('$0,0.00000');

		const tokenAssetValue = getTokenAssetValue({
			balance,
			tokenPrice,
			contract_decimals,
		});

		const tokenAssetValueString = formatBnToString({
			format: '0.00',
			bigNumber: tokenAssetValue,
		});

		const tokenAssetValueFormatted = formatBnToFiatValue({
			currency: 'usd',
			format: '0,0.00',
			bigNumber: tokenAssetValue,
		});

		return {
			tokenName,
			tokenSymbol,
			tokenLogoUrl,
			tokenContractAddress: contract_address,
			tokenBalance: tokenBalanceAmountFormatted,
			tokenPrice: {
				string: tokenPrice,
				number: Number(tokenPrice),
				formatted: tokenPriceFormatted,
			},
			totalAssetValue: {
				string: tokenAssetValueString,
				number: Number(tokenAssetValueString),
				formatted: tokenAssetValueFormatted,
			},
		};
	});
};

export default getTokenDisplayData;
