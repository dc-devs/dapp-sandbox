import Grid from '@material-ui/core/Grid';
import DollarSummary from './dollar-summary';
import { makeStyles } from '@material-ui/core/styles';

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
					<DollarSummary title="Fiat Deposited" amount="$0.00" />
				</Grid>
				<Grid item xs>
					<DollarSummary
						title="Crypto Assets"
						amount={totalAssetValueFiat}
					/>
				</Grid>
				<Grid item xs>
					<DollarSummary title="Fiat Withdrawn" amount="$0.00" />
				</Grid>
			</Grid>
		</div>
	);
};

export default AssetDolllarSummary;
