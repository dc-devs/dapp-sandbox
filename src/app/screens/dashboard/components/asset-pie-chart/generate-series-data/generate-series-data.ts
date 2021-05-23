import TokenDisplayData from '../../../../../../interfaces/token-display-data-interface';
import HighchartPieSeriesDataPoint from '../../../../../../interfaces/highchart-point-data-pie-interface';

interface Props {
	tokenDisplayData: TokenDisplayData[];
}

const generateSeriesData = ({
	tokenDisplayData,
}: Props): HighchartPieSeriesDataPoint[] => {
	const seriesData = tokenDisplayData.map((token) => {
		const { totalAssetValue } = token;

		return {
			name: `${totalAssetValue.formatted}`,
			y: Math.floor(totalAssetValue.number),
			color: '#ffcd00',
			sliced: true,
		};
	});

	return seriesData;
};

export default generateSeriesData;
