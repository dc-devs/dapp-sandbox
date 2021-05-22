import Grid from '@material-ui/core/Grid';
import BigNumber from 'bignumber.js';
import { makeStyles } from '@material-ui/core/styles';
import numeral from 'numeral';
import CovalentTokenBalance from '../../../../../services/covalent/covalent-token-balance-interface';
import NomicsTokenData from '../../../../../services/nomics/nomics-token-data-interface';
import getFormattedTokenBalance from '../../../../../utils/get-formatted-token-balance';

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
	tokenData: NomicsTokenData;
	tokenBalance: CovalentTokenBalance;
}

const TokenBalance = ({ tokenBalance, tokenData }: Props) => {
	const classes = useStyles();
	const { balance, contract_decimals } = tokenBalance;
	const tokenBalanceAmountFormatted = getFormattedTokenBalance(
		balance,
		contract_decimals
	);

	const tokenPrice = tokenData?.price || '0';
	const balanceBN = new BigNumber(balance);
	const totalBN = balanceBN
		.shiftedBy(-contract_decimals)
		.multipliedBy(tokenPrice);

	const tokenPriceFormatted = numeral(tokenPrice).format('$0,0.00000');
	const totalFormatted = numeral(totalBN.toString()).format('$0,0.00');

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
						<div>{tokenBalanceAmountFormatted}</div>
					</div>
				</Grid>
				<Grid item xs className={classes.gridItem}>
					<div className={classes.price}>
						<div>{tokenPriceFormatted}</div>
					</div>
				</Grid>
				<Grid item xs className={classes.gridItem}>
					<div className={classes.total}>
						<div>{totalFormatted}</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default TokenBalance;
