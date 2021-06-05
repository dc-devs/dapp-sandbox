import Transaction from './transaction';
import Paper from '@material-ui/core/Paper';
// import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	transactionsContainer: {
		marginTop: '20px',
		borderRadius: '10px',
		padding: theme.spacing(2),
	},
	transactionsHeader: {
		fontSize: '1.2rem',
	},
}));

const Transactions = () => {
	const classes = useStyles();

	let transactionsComponents = [<Transaction />];

	return (
		<Paper elevation={3} className={classes.transactionsContainer}>
			<Typography className={classes.transactionsHeader}>
				Transactions
			</Typography>
			<div> {transactionsComponents} </div>
		</Paper>
	);
};

export default Transactions;
