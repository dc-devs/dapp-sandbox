import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { themeColors } from '../../../../../../theme/colors';
import { Triangle } from 'react-feather';

const { green } = themeColors;

const useStyles = makeStyles((theme) => ({
	valuationContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
		jsutifyContent: 'center',
		height: '120px',
		borderRadius: '10px',
		padding: theme.spacing(2),
	},
	valuationHeaderContainer: {
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center',
	},
	valuationValueContainer: {
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		'flex-grow': '1',
		position: 'relative',
	},
	valuationHeader: {
		fontSize: '1.2rem',
	},
	valuationValue: {
		fontSize: '1.5rem',
		'font-weight': '500',
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
		fill: green,
	},
	deltaValue: {
		color: green,
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
			<div className={classes.valuationHeaderContainer}>
				<Typography className={classes.valuationHeader}>
					{title}
				</Typography>
			</div>
			<div className={classes.valuationValueContainer}>
				<Typography className={classes.valuationValue}>
					{amount}
				</Typography>
				{deltaValueComponent}
			</div>
		</Paper>
	);
};

export default DollarSummary;
