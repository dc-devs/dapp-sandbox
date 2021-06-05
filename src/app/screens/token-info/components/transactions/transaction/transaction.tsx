import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import shortenWalletAddress from '../../../../../../utils/shorten-wallet-address';
const useStyles = makeStyles((theme) => ({
	transactionContainer: {
		borderRadius: '10px',
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
		padding: theme.spacing(2),
	},
}));

// interface TransactionModel {
// 	fromWallet: string;
// }

// interface Props {
// 	transaction: TransactionModel;
// }

const Transaction = () => {
	const classes = useStyles();

	return (
		<Paper elevation={3} className={classes.transactionContainer}>
			<div></div>
		</Paper>
	);
};

export default Transaction;
