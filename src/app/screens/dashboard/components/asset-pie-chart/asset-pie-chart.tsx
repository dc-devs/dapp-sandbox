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
//
// 2. Cahnges colors on char for light theme
// finished with legend to right w/ percentages
// refactor that area a bit
const useStyles = makeStyles((theme) => ({
	label: {
		fontSize: '1.5rem',
		color: theme.palette.primary.main,
		fill: theme.palette.primary.main,
	},
	legendContainer: {
		display: 'flex',
		flexDirection: 'column',
		position: 'relative',
	},
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
		marginRight: '10px',
	},
}));

interface Props {
	totalAssetValue: string;
	tokenDisplayData: TokenDisplayData[];
}

const AssetPieChart = ({ totalAssetValue, tokenDisplayData }: Props) => {
	const classes = useStyles();
	const seriesData = generateSeriesData({ tokenDisplayData });

	const legendComponent = (props: any) => {
		console.log(props);
		const { payload } = props;
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
					<div className={classes.legendItem}>{entry.value}</div>
				</div>
			);
		});

		return <div className={classes.legendContainer}>{legendItems}</div>;
	};

	const cellComponents = seriesData.map((entry, index) => {
		return <Cell key={`cell-${index}`} fill={pieChartColors[index]} />;
	});

	return (
		<ResponsiveContainer width="100%" height={300}>
			<PieChart>
				<Pie
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
				<Legend content={legendComponent} />;
			</PieChart>
		</ResponsiveContainer>
	);
};

export default AssetPieChart;
