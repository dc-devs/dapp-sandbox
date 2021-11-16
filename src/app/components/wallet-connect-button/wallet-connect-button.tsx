import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import WalletConnectModal from '../wallet-connect-modal';
import { selectMetaMaskWallet } from '../../../redux/slices/metamask-slice';

const useStyles = makeStyles((theme) => ({
	buttonRoot: {
		textTransform: 'none',
		borderRadius: '10px',
		backgroundColor: theme.palette.primary.main,
		color: 'white',
		'&:hover': {
			backgroundColor: theme.palette.primary.dark,
		},
	},
	buttonText: {
		padding: '.2rem .4rem',
	},
}));

const WalletConnectButton = () => {
	const classes = useStyles();
	const metaMaskWallet = useSelector(selectMetaMaskWallet);
	const [open, setOpen] = useState(false);

	const toggleModal = () => {
		if (open) {
			setOpen(false);
		} else {
			setOpen(true);
		}
	};

	const isOpen = metaMaskWallet.isConnected ? false : open;

	return (
		<>
			<Button
				className={classes.buttonRoot}
				disableRipple={true}
				onClick={toggleModal}
			>
				<Typography className={classes.buttonText}>
					Connect to a wallet
				</Typography>
				<WalletConnectModal isOpen={isOpen} />
			</Button>
		</>
	);
};

export default WalletConnectButton;
