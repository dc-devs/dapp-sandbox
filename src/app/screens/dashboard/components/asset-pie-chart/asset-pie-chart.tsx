import { useState } from 'react';
import numeral from 'numeral';
import pieChartColors from './pie-chart-colors';
import { makeStyles } from '@material-ui/core/styles';
import generateSeriesData from './generate-series-data';
import { Pie, Cell, Label, Sector, Legend, PieChart } from 'recharts';
import TokenDisplayData from '../../../../../interfaces/token-display-data-interface';

// LEFT OFF
// 1. Start to Calculate the Fiat In
// and see what it takes to get that number
// 2 Coinbase Integrations
const useStyles = makeStyles((theme) => ({
	label: {
		fontSize: '1.5rem',
		color: theme.palette.primary.main,
		fill: theme.palette.primary.main,
	},
	legendContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	legendItemContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '2px 30px',
	},
	legendCircle: {
		width: '10px',
		height: '10px',
		borderRadius: '100%',
		marginRight: '5px',
	},
	legendItem: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100px',
		fontSize: '.95rem',
	},
	legendItemToken: {
		marginRight: '10px',
	},
	pieChart: {
		cursor: 'pointer',
	},
	labelContainer: {
		display: 'flex',
		flexDirection: 'column',
	},
}));

interface Props {
	totalAssetValue: string;
	tokenDisplayData: TokenDisplayData[];
}

interface TokenData {
	name: string;
	percent: number;
}

interface TokenPayload {
	payload: TokenData;
}

interface TokenSymbolPercents {
	[key: string]: number;
}

const AssetPieChart = ({ totalAssetValue, tokenDisplayData }: Props) => {
	const classes = useStyles();
	const seriesData = generateSeriesData({ tokenDisplayData });
	const cellComponents = seriesData.map((entry, index) => {
		return <Cell key={`cell-${index}`} fill={pieChartColors[index]} />;
	});
	const [index, setIndex] = useState(-1);

	const onPieEnter = (_: any, index: number) => {
		setIndex(index);
	};
	const onPieLeave = () => {
		setIndex(-1);
	};

	const legendComponent = (props: any) => {
		const { payload } = props;
		let tokenSymbolsPercents = {} as TokenSymbolPercents;

		props.payload.forEach((token: TokenPayload) => {
			const tokenData = token.payload;
			tokenSymbolsPercents[tokenData.name] = tokenData.percent;
		});

		const legendItems = payload.map((entry: any, index: number) => {
			let colorHex;

			if (index < 11) {
				colorHex = pieChartColors[index];
			} else if (index >= 11) {
				colorHex = pieChartColors[index - 11];
			} else if (index >= 22) {
				colorHex = pieChartColors[index - 22];
			} else if (index >= 33) {
				colorHex = pieChartColors[index - 33];
			} else if (index >= 44) {
				colorHex = pieChartColors[index - 44];
			} else if (index >= 55) {
				colorHex = pieChartColors[index - 55];
			}

			const tokeSymbol = entry.value;
			const percent = tokenSymbolsPercents[tokeSymbol] * 100;
			const percentFormatted = numeral(percent).format('0.0');

			return (
				<div
					key={`item-${index}`}
					className={classes.legendItemContainer}
				>
					<div
						className={classes.legendCircle}
						style={{
							backgroundColor: colorHex,
						}}
					/>
					<div className={classes.legendItem}>
						<div className={classes.legendItemToken}>
							{tokeSymbol}
						</div>
						<div>{percentFormatted}%</div>
					</div>
				</div>
			);
		});

		return <div className={classes.legendContainer}>{legendItems}</div>;
	};

	const renderActiveShape = (props: any) => {
		const RADIAN = Math.PI / 180;
		const {
			cx,
			cy,
			midAngle,
			innerRadius,
			outerRadius,
			startAngle,
			endAngle,
			fill,
			payload,
			percent,
			value,
		} = props;
		const sin = Math.sin(-RADIAN * midAngle);
		const cos = Math.cos(-RADIAN * midAngle);
		const sx = cx + (outerRadius + 10) * cos;
		const sy = cy + (outerRadius + 10) * sin;
		const mx = cx + (outerRadius + 30) * cos;
		const my = cy + (outerRadius + 30) * sin;
		const ex = mx + (cos >= 0 ? 1 : -1) * 22;
		const ey = my;
		const textAnchor = cos >= 0 ? 'start' : 'end';

		const tokenAssetValue = numeral(payload.value).format('$0,000');
		const tokenAssetSymbol = payload.name;
		const tokenPercent = percent * 100;
		const percentFormatted = `${numeral(tokenPercent).format('0.0')}%`;

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
		<PieChart width={465} height={390} className={classes.pieChart}>
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
			<Legend
				align="center"
				layout="horizontal"
				content={legendComponent}
			/>
		</PieChart>
	);
};

export default AssetPieChart;
