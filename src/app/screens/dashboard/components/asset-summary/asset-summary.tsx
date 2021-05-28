import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TokenBalances from './components/token-balances';
import AssetPieChart from './components/asset-pie-chart';
import TokenDisplayData from '../../../../../interfaces/token-display-data-interface';

const useStyles = makeStyles((theme) => ({
	assetSummaryContainer: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
	},
	portfolioContainer: {
		marginTop: theme.spacing(2),
		paddingTop: theme.spacing(2),
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
		paddingBottom: theme.spacing(6),
		overflowY: 'scroll',
	},
	portfolioHeader: {},
	allocationPieChart: {
		display: 'flex',
		justifyContent: 'center',
	},
}));

interface Props {
	totalAssetValueFiat: string;
	tokenDisplayData: TokenDisplayData[];
}

const AssetDolllarSummary = ({
	totalAssetValueFiat,
	tokenDisplayData,
}: Props) => {
	const classes = useStyles();

	return (
		<div className={classes.assetSummaryContainer}>
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
							className={classes.portfolioContainer}
						>
							<Typography className={classes.portfolioHeader}>
								Allocations
							</Typography>
							<div className={classes.allocationPieChart}>
								<AssetPieChart
									tokenDisplayData={tokenDisplayData}
									totalAssetValue={totalAssetValueFiat}
								/>
							</div>
						</Paper>
					</div>
				</Grid>
				<Grid item xs={8}>
					<TokenBalances tokenDisplayData={tokenDisplayData} />
				</Grid>
			</Grid>
		</div>
	);
};

export default AssetDolllarSummary;
