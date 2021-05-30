import Grid from '@material-ui/core/Grid';
import DollarSummary from './dollar-summary';
import { makeStyles } from '@material-ui/core/styles';
import DollarSummaryDeposits from './dollar-summary-deposits';
import DollarSummaryWithdrawls from './dollar-summary-withdrawls';

const useStyles = makeStyles(() => ({
	assetDollarSummaryContainer: {},
}));

interface Props {
	totalAssetValueFiat: string;
}

const AssetDolllarSummary = ({ totalAssetValueFiat }: Props) => {
	const classes = useStyles();

	return (
		<div className={classes.assetDollarSummaryContainer}>
			<Grid
				container
				direction="row"
				justify="flex-start"
				alignItems="flex-start"
				spacing={3}
			>
				<Grid item xs>
					<DollarSummaryDeposits />
				</Grid>
				<Grid item xs>
					<DollarSummary
						title="Crypto Assets"
						deltaValue={100}
						amount={totalAssetValueFiat}
					/>
				</Grid>
				<Grid item xs>
					<DollarSummaryWithdrawls />
				</Grid>
			</Grid>
		</div>
	);
};

export default AssetDolllarSummary;
