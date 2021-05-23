import HighchartPointDataPie from '../../interfaces/highchart-point-data-pie-interface';

interface PieChartData {
	seriesData: HighchartPointDataPie[];
	totalAssetValue: string;
}

const generateChartOptions = ({
	totalAssetValue,
	seriesData,
}: PieChartData) => {
	return {
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
			text: totalAssetValue,
		},
		legend: {},
		series: [
			{
				type: 'pie',
				id: 'asset-allocation',
				name: 'Asset Allocation',
				data: seriesData,
			},
		],
	};
};

export default generateChartOptions;
