import Paper from '@material-ui/core/Paper';
import { useGetTransactions } from '../../../hooks';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const assetSummaryWidth = 422;

const useStyles = makeStyles((theme) => ({
	root: {
		// display: 'flex',
	},
	pageContainer: {
		padding: theme.spacing(3),
		height: '100vh',
	},
	header: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: theme.spacing(2),
	},
	headerText: {
		fontSize: '2rem',
	},
	subheaderText: {},
	dashboardDataContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	assetSummaryContainer: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		width: assetSummaryWidth,
	},
	valuationContainer: {
		width: assetSummaryWidth,
	},
	valuationHeader: {},
	portfolioContainer: {
		width: assetSummaryWidth,
	},
	portfolioHeader: {},
}));

const PermanentDrawer = () => {
	const classes = useStyles();

	useGetTransactions();

	return (
		<div className={classes.root}>
			<div className={classes.pageContainer}>
				<div className={classes.header}>
					<Typography className={classes.headerText}>
						Dashboard
					</Typography>
					<Typography className={classes.subheaderText}>
						View your transactions, analyze your portfolio, and much
						more
					</Typography>
				</div>
				<div className={classes.dashboardDataContainer}>
					<div className={classes.assetSummaryContainer}>
						<Paper className={classes.valuationContainer}>
							<Typography className={classes.valuationHeader}>
								USD Valuation
							</Typography>
						</Paper>
						<Paper className={classes.portfolioContainer}>
							<Typography className={classes.portfolioHeader}>
								Allocations
							</Typography>
						</Paper>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PermanentDrawer;
