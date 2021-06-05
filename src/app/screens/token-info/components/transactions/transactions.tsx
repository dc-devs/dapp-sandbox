import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	transactionsContainer: {
		marginTop: '20px',
		borderRadius: '10px',
		padding: theme.spacing(2),
	},
	loadingState: {
		textAlign: 'center',
		fontSize: '1.5rem',
	},
}));

const Transactions = () => {
	const classes = useStyles();

	return (
		<Paper elevation={2} className={classes.transactionsContainer}>
			<Typography>Transactions</Typography>
			<Divider />
			{/* <div> {transactionsHTML} </div> */}
		</Paper>
	);
};

export default Transactions;
