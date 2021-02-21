import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { useGetTransactions } from '../../../../hooks';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	tokenContainer: {
		padding: theme.spacing(2),
	},
}));

const Transactions = () => {
	const classes = useStyles();

	useGetTransactions();

	return (
		<Paper elevation={2} className={classes.tokenContainer}>
			<Typography>Transactions</Typography>
			<Divider />
		</Paper>
	);
};

export default Transactions;
