import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const chartOptions: Highcharts.Options = {
	chart: {
		type: 'pie',
		plotShadow: false,
	},
	credits: {
		enabled: false,
	},
	plotOptions: {
		pie: {
			innerSize: '100%',
			borderWidth: 6,
			borderColor: undefined,
			slicedOffset: 5,
			dataLabels: {
				connectorWidth: 0,
			},
		},
	},
	title: {
		verticalAlign: 'middle',
		floating: true,
		text: '$ 600,000.00',
	},
	legend: {},
	series: [
		{
			type: 'pie',
			id: 'idData',
			name: 'Data',
			data: [
				{
					name: '$ 170,000.0',
					y: 170000.0,
					color: '#2ecc71',
					sliced: true,
				},
				{
					name: '$ 210,000.0',
					y: 210000.0,
					color: '#18c3f3',
					sliced: true,
				},
				{
					name: '$ 220,000.0',
					y: 220000.0,
					color: '#ffcd00',
					sliced: true,
				},
			],
		},
	],
};

const AssetPieChart = () => {
	return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default AssetPieChart;
