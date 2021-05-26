import numeral from 'numeral';
import pieChartColors from '../../pie-chart-colors';
import TokenPayload from '../interfaces/token-payload';
import LegendPayload from '../interfaces/legend-payload';
import TokenSymbolPercents from '../interfaces/token-percents';

const getLegendItemsData = (legendPayload: LegendPayload) => {
	const { payload } = legendPayload;
	let tokenSymbolsPercents = {} as TokenSymbolPercents;

	payload.forEach((token: TokenPayload) => {
		const tokenData = token.payload;
		tokenSymbolsPercents[tokenData.name] = tokenData.percent;
	});

	const legendItemsData = payload.map((entry: any, index: number) => {
		let colorHex;

		if (index < 11) {
			colorHex = pieChartColors[index];
		} else if (index >= 11) {
			colorHex = pieChartColors[index - 11];
		} else if (index >= 22) {
			colorHex = pieChartColors[index - 22];
		} else if (index >= 33) {
			colorHex = pieChartColors[index - 33];
		} else if (index >= 44) {
			colorHex = pieChartColors[index - 44];
		} else if (index >= 55) {
			colorHex = pieChartColors[index - 55];
		}

		const tokeSymbol = entry.value;
		const percent = tokenSymbolsPercents[tokeSymbol] * 100;
		const percentFormatted = numeral(percent).format('0.0');

		return {
			percent,
			colorHex,
			tokeSymbol,
			percentFormatted,
		};
	});

	return legendItemsData;
};

export default getLegendItemsData;
