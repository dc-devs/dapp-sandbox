import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TokenBalances from './components/token-balances';
import AssetPieChart from './components/asset-pie-chart';
import TokenDisplayData from '../../../../../interfaces/token-display-data-interface';

const useStyles = makeStyles((theme) => ({
	assetSummaryContainer: {
		marginTop: '20px',
	},
	assetSummaryItemContainer: {
		display: 'flex',
		flexDirection: 'column',
		height: '478px',
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
				<Grid item xs={5}>
					<div className={classes.assetSummaryItemContainer}>
						<AssetPieChart
							tokenDisplayData={tokenDisplayData}
							totalAssetValue={totalAssetValueFiat}
						/>
					</div>
				</Grid>
				<Grid item xs={7}>
					<TokenBalances tokenDisplayData={tokenDisplayData} />
				</Grid>
			</Grid>
		</div>
	);
};

export default AssetDolllarSummary;
