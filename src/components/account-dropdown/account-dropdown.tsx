import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { selectMetaMaskWalletData } from '../../redux/slices/metamask-slice';
import utils from '../../utils';

const { shortenWalletAddress } = utils;

const useStyles = makeStyles((theme) => ({
	accountDropdownContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: theme.spacing(3),
		border: `1px solid #eceff1`,
		borderRadius: '12px',
		minHeight: '36px',
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
		minWidth: '113px',
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
	const metaMaskWalletData = useSelector(selectMetaMaskWalletData);
	const { address } = metaMaskWalletData;
	const shortendWalletAddress = shortenWalletAddress(address);

	return (
		<div className={classes.accountDropdownContainer}>
			<div className={classes.signedInDot} />
			<Typography className={classes.walletAdress}>
				{shortendWalletAddress}
			</Typography>
			<ArrowBackIosRoundedIcon className={classes.dropdownArrow} />
		</div>
	);
};

export default AccountDropdown;
