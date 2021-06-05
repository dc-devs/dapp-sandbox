import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import shortenWalletAddress from '../../../../../../utils/shorten-wallet-address';
const useStyles = makeStyles((theme) => ({
	transactionContainer: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
		padding: theme.spacing(2),
	},
}));

interface TransactionModel {
	fromWallet: string;
}

interface Props {
	transaction: TransactionModel;
}

const Transaction = ({ transaction }: Props) => {
	const classes = useStyles();

	return (
		<Paper elevation={2} className={classes.transactionContainer}>
			<div>From: {transaction.fromWallet}</div>
		</Paper>
	);
};

export default Transaction;
