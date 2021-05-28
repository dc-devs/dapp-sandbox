import { makeStyles } from '@material-ui/core/styles';
import LegendColumn from './legend-column';
import splitArrayInTwo from '../../../../../../../../utils/split-array-in-two';
import getLegendItemsData from './get-legend-items-data';

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

const Legend = (legendPayload: any) => {
	const classes = useStyles();
	const legendItemsData = getLegendItemsData(legendPayload);

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
					legendItemsDatas={legendItemsDataHalves.secondHalf}
				/>
			</div>
		</div>
	);
};

export default Legend;
