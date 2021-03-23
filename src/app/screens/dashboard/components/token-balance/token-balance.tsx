import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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

interface TokenBalanceObj {
	contract_address: string;
	logo_url: string;
	contract_name: string;
	contract_ticker_symbol: string;
	balance: string;
}

interface Props {
	tokenBalance: TokenBalanceObj;
}

const TokenBalance = ({ tokenBalance }: Props) => {
	const classes = useStyles();

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
							src={tokenBalance.logo_url}
							className={`${classes.image} ${classes.assetItem}`}
						/>
						<div className={classes.assetItem}>
							{tokenBalance.contract_ticker_symbol} -{' '}
							{tokenBalance.contract_name}
						</div>
						<div className={classes.assetItem}></div>
					</div>
				</Grid>
				<Grid item xs className={classes.gridItem}>
					<div className={classes.amount}>
						<div>{tokenBalance.balance}</div>
					</div>
				</Grid>
				<Grid item xs className={classes.gridItem}>
					<div className={classes.price}>
						<div>$100.50</div>
					</div>
				</Grid>
				<Grid item xs className={classes.gridItem}>
					<div className={classes.total}>
						<div>$50,000,000.34</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default TokenBalance;
