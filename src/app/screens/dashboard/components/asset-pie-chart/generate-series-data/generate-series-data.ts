import TokenDisplayData from '../../../../../../interfaces/token-display-data-interface';
import HighchartPieSeriesDataPoint from '../../../../../../interfaces/highchart-point-data-pie-interface';

interface Props {
	tokenDisplayData: TokenDisplayData[];
}

// const colors = {
// 	purpleDark: '#690eef',
// 	purpleLight: '#9f16f4',
// 	blueDark: '#4fa9f0',
// 	blueLight: '#4ec4eb',
// 	aquaDark: '#2befdd',
// 	aquaLight: '#2cefdc',
// 	greenDark: '#1fbf52',
// 	greenLight: '#88fb77',
// 	orangeDark: '#fa9a2f',
// 	orangeLight: '#fdcc3c',
// };

interface Colors {
	[key: number]: string;
}

const colors = {
	0: '#690eef',
	1: '#9f16f4',
	2: '#4fa9f0',
	3: '#4ec4eb',
	4: '#2befdd',
	5: '#2cefdc',
	6: '#1fbf52',
	7: '#88fb77',
	8: '#fa9a2f',
	9: '#fdcc3c',
} as Colors;

const generateSeriesData = ({
	tokenDisplayData,
}: Props): HighchartPieSeriesDataPoint[] => {
	const seriesData = tokenDisplayData.map((token, index) => {
		const { totalAssetValue } = token;
		const yAxis = Math.floor(totalAssetValue.number);

		return {
			name: `${totalAssetValue.formatted}`,
			y: yAxis,
			color: colors[index],
			sliced: true,
		};
	});

	return seriesData;
};

export default generateSeriesData;
