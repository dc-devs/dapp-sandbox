import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TokenBalance from '../token-balance';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TokenDisplayData from '../../../../../interfaces/token-display-data-interface';

const useStyles = makeStyles((theme) => ({
	tokenContainer: {
		padding: theme.spacing(2),
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
}));

interface Props {
	tokenDisplayData: TokenDisplayData[];
}

const TokenBalances = ({ tokenDisplayData }: Props) => {
	const classes = useStyles();

	const tokenBalanceComponents = tokenDisplayData.map((token) => {
		const { tokenContractAddress } = token;
		return <TokenBalance key={tokenContractAddress} token={token} />;
	});

	return (
		<Paper elevation={2} className={classes.tokenContainer}>
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
				{tokenBalanceComponents}
			</div>
		</Paper>
	);
};

export default TokenBalances;
