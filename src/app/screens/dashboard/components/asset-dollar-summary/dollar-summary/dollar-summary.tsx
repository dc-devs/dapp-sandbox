import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { themeColors } from '../../../../../../theme/colors';

const { green } = themeColors;

const useStyles = makeStyles((theme) => ({
	valuationContainer: {
		height: '120px',
		display: 'flex',
		flexDirection: 'column',
		borderRadius: '10px',
		padding: theme.spacing(2),
	},
	valuationHeader: {
		fontSize: '1.2rem',
		textAlign: 'center',
	},
	valuation: {
		display: 'flex',
		justifyContent: 'center',
		'flex-grow': '1',
		alignItems: 'center',
		textAlign: 'center',
		fontSize: '1.5rem',
	},
	fiatDeposited: {
		color: green,
	},
	cryptoValuation: {
		color: green,
	},
	fiatWithdrawn: {
		color: green,
	},
}));

interface Props {
	title: string;
	amount: string;
}

const DollarSummary = ({ title, amount }: Props) => {
	const classes = useStyles();

	return (
		<Paper elevation={3} className={classes.valuationContainer}>
			<Typography className={classes.valuationHeader}>{title}</Typography>
			<Typography
				className={`${classes.fiatDeposited} ${classes.valuation}`}
			>
				{amount}
			</Typography>
		</Paper>
	);
};

export default DollarSummary;
