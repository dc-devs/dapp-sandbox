import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

const useStyles = makeStyles((theme) => ({
	accountDropdownContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: theme.spacing(3),
		border: `1px solid #eceff1`,
		borderRadius: '12px',
	},
	signedInDot: {
		height: '10px',
		width: '10px',
		backgroundColor: theme.palette.primary.main,
		borderRadius: '50%',
	},
	walletAdress: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '.3rem .5rem',
		color: theme.palette.text.primary,
		margin: '0 5px',
	},
	dropdownArrow: {
		fontSize: '1rem',
		transform: 'rotate(-90deg)',
	},
}));

const AccountDropdown = () => {
	const classes = useStyles();

	return (
		<div className={classes.accountDropdownContainer}>
			<div className={classes.signedInDot} />
			<Typography className={classes.walletAdress}>
				0x9881...CC0D
			</Typography>
			<ArrowBackIosRoundedIcon className={classes.dropdownArrow} />
		</div>
	);
};

export default AccountDropdown;
