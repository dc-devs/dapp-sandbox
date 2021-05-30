import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TokenBalance from './token-balance';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TokenBalanceInterface from '../../../../../../../interfaces/token-balance-interface';

const useStyles = makeStyles((theme) => ({
	tokenBalancesContainer: {
		height: '478px',
		padding: theme.spacing(2),
		borderRadius: '10px',
	},
	tokenBalancesTable: {},
	tokenBalancesHeader: {
		marginTop: theme.spacing(2),
	},
	tokenBalanceHeader: {
		fontWeight: 'bold',
		fontSize: '1.1rem',
		marginBottom: theme.spacing(2),
	},
	tokenBalancesColumn: {
		textAlign: 'right',
		'&:first-child': {
			textAlign: 'left',
		},
	},
	tokenBalancesTokensContainer: {
		overflowY: 'scroll',
		height: '361px',
	},
}));

interface Props {
	tokenBalances: TokenBalanceInterface[];
}

const TokenBalances = ({ tokenBalances = [] }: Props) => {
	const classes = useStyles();

	const tokenBalanceComponents = tokenBalances.map((token) => {
		const { contractAddress } = token;
		return <TokenBalance key={contractAddress} token={token} />;
	});

	return (
		<Paper elevation={3} className={classes.tokenBalancesContainer}>
			<Typography className={classes.tokenBalanceHeader}>
				Tokens
			</Typography>
			<Divider />
			<div className={classes.tokenBalancesTable}>
				<div className={classes.tokenBalancesHeader}>
					<Grid
						container
						direction="row"
						justify="space-between"
						alignItems="center"
						spacing={3}
					>
						<Grid item xs className={classes.tokenBalancesColumn}>
							<Typography>Asset</Typography>
						</Grid>
						<Grid item xs className={classes.tokenBalancesColumn}>
							<Typography>Amount</Typography>
						</Grid>
						<Grid item xs className={classes.tokenBalancesColumn}>
							<Typography>Price</Typography>
						</Grid>
						<Grid item xs className={classes.tokenBalancesColumn}>
							<Typography>Total</Typography>
						</Grid>
					</Grid>
				</div>
				<div className={classes.tokenBalancesTokensContainer}>
					{tokenBalanceComponents}
				</div>
			</div>
		</Paper>
	);
};

export default TokenBalances;
