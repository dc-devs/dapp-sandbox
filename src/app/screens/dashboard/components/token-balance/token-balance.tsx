import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TokenDisplayData from '../../../../../interfaces/token-display-data-interface';

const useStyles = makeStyles((theme) => ({
	tokenBalanceContainer: {
		marginTop: theme.spacing(2),
	},
	assetContainer: {
		display: 'flex',
	},
	assetItem: {
		margin: '0 5px',
	},
	image: {
		width: '25px',
		height: '25px',
		borderRadius: '50%',
		boxShadow: theme.shadows[2],
	},
	gridItem: {
		textAlign: 'right',
	},
	amount: {},
	price: {},
	total: {},
}));

interface Props {
	token: TokenDisplayData;
}

const TokenBalance = ({ token }: Props) => {
	const classes = useStyles();
	const {
		tokenName,
		tokenPrice,
		tokenSymbol,
		tokenBalance,
		tokenLogoUrl,
		totalAssetValue,
	} = token;

	return (
		<div className={classes.tokenBalanceContainer}>
			<Grid
				container
				direction="row"
				justify="space-between"
				alignItems="center"
				spacing={3}
			>
				<Grid item xs>
					<div className={classes.assetContainer}>
						<img
							alt=""
							src={tokenLogoUrl}
							className={`${classes.image} ${classes.assetItem}`}
						/>
						<div className={classes.assetItem}>
							{tokenSymbol} - {tokenName}
						</div>
						<div className={classes.assetItem}></div>
					</div>
				</Grid>
				<Grid item xs className={classes.gridItem}>
					<div className={classes.amount}>
						<div>{tokenBalance}</div>
					</div>
				</Grid>
				<Grid item xs className={classes.gridItem}>
					<div className={classes.price}>
						<div>{tokenPrice}</div>
					</div>
				</Grid>
				<Grid item xs className={classes.gridItem}>
					<div className={classes.total}>
						<div>{totalAssetValue}</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default TokenBalance;
