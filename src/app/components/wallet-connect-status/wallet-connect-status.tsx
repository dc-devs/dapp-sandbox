import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { shortenWalletAddress } from '../../../utils';
import { selectMetaMaskWallet } from '../../../redux/slices/metamask-slice';

const useStyles = makeStyles((theme) => ({
	walletEthAmountcontainer: {
		border: `1px solid rgb(110, 114, 125)`,
		borderRadius: '10px',
		padding: '.2rem .4rem',
		color: 'rgb(110, 114, 125)',
	},
	walletAddressContainer: {
		border: `1px solid rgb(110, 114, 125)`,
		borderRadius: '10px',
		padding: '.2rem .4rem',
		color: 'rgb(110, 114, 125)',
	},
}));

const WalletConnectStatus = () => {
	const classes = useStyles();
	const metaMaskWallet = useSelector(selectMetaMaskWallet);
	const { selectedAddress } = metaMaskWallet;
	const abreviatedWalletAddress = shortenWalletAddress(selectedAddress);
	// const walletEthAmount = '1.08 ETH';

	return (
		<>
			{/* <div className={classes.walletEthAmountcontainer}>
				<Typography>{walletEthAmount}</Typography>
			</div> */}
			<div className={classes.walletAddressContainer}>
				<Typography>{abreviatedWalletAddress}</Typography>
			</div>
		</>
	);
};

export default WalletConnectStatus;
