import LegendItemData from '../interfaces/legend-data-item';
import { makeStyles } from '@material-ui/core/styles';

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

interface Props {
	legendItemsDatas: LegendItemData[];
}

const LegendColumn = ({ legendItemsDatas }: Props) => {
	const classes = useStyles();

	const legendItems = legendItemsDatas.map(
		(legendItemData: LegendItemData, index: number) => {
			const { colorHex, tokeSymbol, percentFormatted } = legendItemData;
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
		}
	);

	return <>{legendItems}</>;
};

export default LegendColumn;
