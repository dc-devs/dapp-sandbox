import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const chartOptions: Highcharts.Options = {
	title: {
		text: '',
	},
	plotOptions: {
		pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			dataLabels: {
				enabled: false,
			},
			showInLegend: true,
		},
	},
	series: [
		{
			type: 'pie',
			name: 'Brands',
			data: [
				{
					name: 'BTC',
					y: 61.41,
				},
				{
					name: 'ETH',
					y: 11.84,
				},
				{
					name: 'RSR',
					y: 10.85,
				},
				{
					name: 'ZKS',
					y: 4.67,
				},
				{
					name: 'REEF',
					y: 4.18,
				},
				{
					name: 'GRT',
					y: 7.05,
				},
			],
		},
	],
};

const AssetPieChart = () => {
	return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default AssetPieChart;
