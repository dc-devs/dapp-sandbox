import numeral from 'numeral';
import pieChartColors from '../pie-chart-colors';
import { makeStyles } from '@material-ui/core/styles';
import LegendColumn from './legend-column';
import splitArrayInTwo from '../../../../../../utils/split-array-in-two';

const useStyles = makeStyles(() => ({
	legendContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	legendColumnContainer: {},
	legendItemContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '2px 25px',
		cursor: 'text',
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
}));

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

const Legend = (props: any) => {
	const { payload } = props;
	const classes = useStyles();

	let tokenSymbolsPercents = {} as TokenSymbolPercents;

	props.payload.forEach((token: TokenPayload) => {
		const tokenData = token.payload;
		tokenSymbolsPercents[tokenData.name] = tokenData.percent;
	});

	const legendItemsData = payload.map((entry: any, index: number) => {
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

		return {
			percent,
			colorHex,
			tokeSymbol,
			percentFormatted,
		};
	});

	const legendItemsDataHalves = splitArrayInTwo(legendItemsData);

	return (
		<div className={classes.legendContainer}>
			<div className={classes.legendColumnContainer}>
				<LegendColumn
					legendItemsDatas={legendItemsDataHalves.firstHalf}
				/>
			</div>
			<div className={classes.legendColumnContainer}>
				<LegendColumn
					legendItemsDatas={legendItemsDataHalves.firstHalf}
				/>
			</div>
		</div>
	);
};

export default Legend;
