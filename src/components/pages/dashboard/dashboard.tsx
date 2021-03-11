import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AssetPieChart from './asset-pie-chart';
import TokenBalances from './token-balances';
// import Transactions from './transactions';

const useStyles = makeStyles((theme) => ({
	pageContainer: {
		height: '100vh',
		padding: theme.spacing(3),
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
	dashboardDataContainer: {
		'flex-grow': '1',
		padding: `${theme.spacing(2)}px ${theme.spacing(5)}px`,
		height: '100vh',
	},
	assetSummaryContainer: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
	},
	valuationContainer: {
		padding: theme.spacing(2),
	},
	valuation: {
		textAlign: 'center',
		fontSize: '1.5rem',
		color: theme.palette.primary.main,
	},
	portfolioContainer: {
		marginTop: theme.spacing(2),
		padding: theme.spacing(2),
	},
	portfolioHeader: {},
	allocationPieChart: {},
}));

const PermanentDrawer = () => {
	const classes = useStyles();

	return (
		<div className={classes.pageContainer}>
			<div className={classes.header}>
				<Typography className={classes.headerText}>
					Dashboard
				</Typography>
				<Typography>
					View your transactions, analyze your portfolio, and much
					more
				</Typography>
			</div>

			<div className={classes.dashboardDataContainer}>
				<Grid
					container
					direction="row"
					justify="flex-start"
					alignItems="flex-start"
					spacing={3}
				>
					<Grid item xs>
						<div className={classes.assetSummaryContainer}>
							<Paper
								elevation={2}
								className={classes.valuationContainer}
							>
								<Typography>USD Valuation</Typography>
								<Typography className={classes.valuation}>
									$6,207
								</Typography>
							</Paper>
							<Paper
								elevation={2}
								className={classes.portfolioContainer}
							>
								<Typography className={classes.portfolioHeader}>
									Allocations
								</Typography>
								<div className={classes.allocationPieChart}>
									<AssetPieChart />
								</div>
							</Paper>
						</div>
					</Grid>
					<Grid item xs={8}>
						<TokenBalances />
					</Grid>
					<Grid item xs={12}>
						{/* <Transactions /> */}
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default PermanentDrawer;
