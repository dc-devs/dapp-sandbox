import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { shortenWalletAddress } from '../../../utils';
import { selectMetaMaskWallet } from '../../../redux/slices/metamask-slice';

const useStyles = makeStyles((theme) => ({
	walletConnectContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'rgb(247, 248, 250)',
		borderRadius: '12px',
		border: '1px solid #ccc',
		color: theme.palette.text.primary,
	},
	walletEthAmountcontainer: {
		padding: '.4rem .8rem',
	},
	walletAddressContainer: {
		padding: '.4rem .8rem',
		borderRadius: '12px',
		color: theme.palette.text.primary,
		backgroundColor: 'white',
	},
}));

const WalletConnectStatus = () => {
	const classes = useStyles();
	const metaMaskWallet = useSelector(selectMetaMaskWallet);
	const { selectedAddress, balance } = metaMaskWallet;
	const abreviatedWalletAddress = shortenWalletAddress(selectedAddress);

	return (
		<div className={classes.walletConnectContainer}>
			<div className={classes.walletEthAmountcontainer}>
				<Typography>{balance} ETH</Typography>
			</div>
			<div className={classes.walletAddressContainer}>
				<Typography>{abreviatedWalletAddress}</Typography>
			</div>
		</div>
	);
};

export default WalletConnectStatus;
