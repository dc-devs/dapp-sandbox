import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { themeColors } from '../../../../../../theme/colors';
import { Triangle } from 'react-feather';

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
		position: 'relative',
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
	deltaContainer: {
		display: 'flex',
		alignItems: 'center',
		alignContent: 'center',
		position: 'absolute',
		bottom: '0px',
		right: '0px',
	},
	deltaArrow: {
		color: green,
		marginRight: '5px',
		width: '15%',
	},
	deltaValue: {
		fontSize: '.9rem',
	},
}));

interface Props {
	title: string;
	amount: string;
	deltaValue?: number;
}

const DollarSummary = ({ title, amount, deltaValue }: Props) => {
	const classes = useStyles();

	const deltaValueComponent = deltaValue ? (
		<div className={classes.deltaContainer}>
			<Triangle className={classes.deltaArrow} />
			<div className={classes.deltaValue}>100%</div>
		</div>
	) : (
		''
	);

	return (
		<Paper elevation={3} className={classes.valuationContainer}>
			<Typography className={classes.valuationHeader}>{title}</Typography>
			<Typography
				className={`${classes.fiatDeposited} ${classes.valuation}`}
			>
				{amount}
				{deltaValueComponent}
			</Typography>
		</Paper>
	);
};

export default DollarSummary;
