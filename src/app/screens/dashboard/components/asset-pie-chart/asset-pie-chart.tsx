import { useState } from 'react';
import numeral from 'numeral';
import pieChartColors from './pie-chart-colors';
import { makeStyles } from '@material-ui/core/styles';
import generateSeriesData from './generate-series-data';
import { Pie, Cell, Label, Sector, Legend, PieChart } from 'recharts';
import TokenDisplayData from '../../../../../interfaces/token-display-data-interface';
import LegendComponent from './legend';

const useStyles = makeStyles((theme) => ({
	pieChart: {
		cursor: 'pointer',
		'& .recharts-legend-wrapper': {
			top: '310px !important',
		},
	},
	label: {
		fontSize: '1.5rem',
		color: theme.palette.primary.main,
		fill: theme.palette.primary.main,
	},
}));

interface Props {
	totalAssetValue: string;
	tokenDisplayData: TokenDisplayData[];
}

const AssetPieChart = ({ totalAssetValue, tokenDisplayData }: Props) => {
	const classes = useStyles();
	const seriesData = generateSeriesData({ tokenDisplayData });
	const [index, setIndex] = useState(-1);

	const onPieEnter = (_: any, index: number) => {
		setIndex(index);
	};

	const onPieLeave = () => {
		setIndex(-1);
	};

	const cellComponents = seriesData.map((entry, index) => {
		return <Cell key={`cell-${index}`} fill={pieChartColors[index]} />;
	});

	const renderActiveShape = (props: any) => {
		const {
			cx,
			cy,
			innerRadius,
			outerRadius,
			startAngle,
			endAngle,
			fill,
			payload,
		} = props;

		const tokenAssetValue = numeral(payload.value).format('$0,000');
		const tokenAssetSymbol = payload.name;

		return (
			<g>
				<text
					x={cx}
					y={cy - 17}
					dy={8}
					textAnchor="middle"
					fill={fill}
					className={classes.label}
				>
					{tokenAssetSymbol}
				</text>
				<text
					x={cx}
					y={cy + 17}
					dy={8}
					textAnchor="middle"
					fill={fill}
					className={classes.label}
				>
					{tokenAssetValue}
				</text>
				<Sector
					cx={cx}
					cy={cy}
					cornerRadius={100}
					innerRadius={innerRadius}
					outerRadius={outerRadius}
					startAngle={startAngle}
					endAngle={endAngle}
					fill={fill}
				/>
				<Sector
					cx={cx}
					cy={cy}
					cornerRadius={100}
					startAngle={startAngle}
					endAngle={endAngle}
					innerRadius={outerRadius + 6}
					outerRadius={outerRadius + 10}
					fill={fill}
				/>
			</g>
		);
	};

	return (
		<PieChart width={350} height={390} className={classes.pieChart}>
			<Pie
				cy={140}
				cursor="pointer"
				activeIndex={index}
				onMouseEnter={onPieEnter}
				onMouseLeave={onPieLeave}
				activeShape={renderActiveShape}
				data={seriesData}
				innerRadius={120}
				outerRadius={130}
				paddingAngle={0}
				cornerRadius={100}
				dataKey="value"
				className={classes.pieChart}
			>
				{cellComponents}

				{index === -1 ? (
					<Label
						width={30}
						position="center"
						className={classes.label}
					>
						{totalAssetValue}
					</Label>
				) : (
					''
				)}
			</Pie>
			<Legend content={LegendComponent} />
		</PieChart>
	);
};

export default AssetPieChart;
