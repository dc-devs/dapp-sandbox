import TokenDisplayData from '../../../../../../interfaces/token-display-data-interface';
import RechartPieDataPoint from '../../../../../../interfaces/rechart-pie-data-point-interface';

interface Props {
	tokenDisplayData: TokenDisplayData[];
}

const generateSeriesData = ({
	tokenDisplayData,
}: Props): RechartPieDataPoint[] => {
	const seriesData = tokenDisplayData.map((token, index) => {
		const { totalAssetValue, tokenSymbol } = token;
		const name = tokenSymbol;
		const value = Math.floor(totalAssetValue.number);

		return { name, value };
	});

	return seriesData;
};

export default generateSeriesData;
