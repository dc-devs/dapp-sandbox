import HighchartPieSeriesDataPoint from '../../../../../../interfaces/highchart-point-data-pie-interface';

interface PieChartData {
	seriesData: HighchartPieSeriesDataPoint[];
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
				innerSize: '92%',
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
			horizonalAlign: 'middle',
			// floating: true,
			text: totalAssetValue,
		},
		// legend: {},
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
