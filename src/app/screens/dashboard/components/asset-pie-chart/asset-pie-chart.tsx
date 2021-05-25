import numeral from 'numeral';
import pieChartColors from './pie-chart-colors';
import { makeStyles } from '@material-ui/core/styles';
import generateSeriesData from './generate-series-data';
import {
	Pie,
	Cell,
	Label,
	Legend,
	PieChart,
	ResponsiveContainer,
} from 'recharts';
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
	legendContainer: {},
	legendItemContainer: {
		display: 'flex',
		alignItems: 'center',
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
	},
	legendItemToken: {
		marginRight: '10px',
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

	const legendComponent = (props: any) => {
		const { payload } = props;
		let tokenSymbolsPercents = {} as TokenSymbolPercents;

		props.payload.forEach((token: TokenPayload) => {
			const tokenData = token.payload;
			tokenSymbolsPercents[tokenData.name] = tokenData.percent;
		});

		console.log(tokenSymbolsPercents);

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

	const cellComponents = seriesData.map((entry, index) => {
		return <Cell key={`cell-${index}`} fill={pieChartColors[index]} />;
	});

	return (
		<ResponsiveContainer width={400} height={300}>
			<PieChart>
				<Pie
					cx="32%"
					data={seriesData}
					innerRadius={115}
					outerRadius={130}
					paddingAngle={0}
					cornerRadius={50}
					dataKey="value"
				>
					{cellComponents}
					<Label
						width={30}
						position="center"
						className={classes.label}
					>
						{totalAssetValue}
					</Label>
				</Pie>
				<Legend
					content={legendComponent}
					align="right"
					layout="vertical"
					verticalAlign="top"
				/>
			</PieChart>
		</ResponsiveContainer>
	);
};

export default AssetPieChart;
