import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import generateChartOptions from './generate-chart-options';
import TokenDisplayData from '../../../../../interfaces/token-display-data-interface';
import generateSeriesData from '../../components/asset-pie-chart/generate-series-data';

interface Props {
	tokenDisplayData: TokenDisplayData[];
	totalAssetValue: string;
}

const AssetPieChart = ({ totalAssetValue, tokenDisplayData }: Props) => {
	const seriesData = generateSeriesData({ tokenDisplayData });
	const chartOptions = generateChartOptions({ totalAssetValue, seriesData });

	return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default AssetPieChart;
