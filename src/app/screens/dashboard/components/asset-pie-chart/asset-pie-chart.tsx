import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import generateChartOptions from './utils/generate-chart-options';
import HighchartPointDataPie from './interfaces/highchart-point-data-pie-interface';

interface Props {
	seriesData: HighchartPointDataPie[];
	totalAssetValue: string;
}

const AssetPieChart = ({ totalAssetValue, seriesData }: Props) => {
	const chartOptions = generateChartOptions({ totalAssetValue, seriesData });

	return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default AssetPieChart;
