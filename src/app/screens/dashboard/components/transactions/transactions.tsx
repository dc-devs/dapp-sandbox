import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Transaction from '../transaction';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
	fetchTransactions,
	selectTransactions,
	selectTransactionsStatus,
	selectTransactionsError,
} from '../../../../../redux/slices/transaction-slice';

const useStyles = makeStyles((theme) => ({
	tokenContainer: {
		padding: theme.spacing(2),
	},
	loadingState: {
		textAlign: 'center',
		fontSize: '1.5rem',
	},
}));

const Transactions = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const transactions = useSelector(selectTransactions);
	const transactionsStatus = useSelector(selectTransactionsStatus);
	const transactionsError = useSelector(selectTransactionsError);

	useEffect(() => {
		if (transactionsStatus === 'idle') {
			const address = '0x98818d16dE85fc14681e865389E77dBdEBa4CC0D';
			dispatch(fetchTransactions(address));
		}
	}, [transactionsStatus, dispatch]);

	// console.log(transactions);

	const transactionsHTML = transactions.slice(1, 5).map((transaction) => {
		return <Transaction key={transaction.hash} transaction={transaction} />;
	});

	return (
		<Paper elevation={2} className={classes.tokenContainer}>
			<Typography>Transactions</Typography>
			<Divider />
			<div> {transactionsHTML} </div>
		</Paper>
	);
};

export default Transactions;
