import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ModalWalletConnect from './connect-to-a-wallet-modal';
import { selectIsMetaMaskConnected } from '../../../redux/slices/metamask-slice';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	buttonRoot: {
		textTransform: 'none',
		borderRadius: '12px',
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

const ConnectToAWallet = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const isWalletConnected = useSelector(selectIsMetaMaskConnected);

	const toggleModal = () => {
		if (open) {
			setOpen(false);
		} else {
			setOpen(true);
		}
	};

	const isOpen = isWalletConnected ? false : open;

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
				<ModalWalletConnect isOpen={isOpen} />
			</Button>
		</>
	);
};

export default ConnectToAWallet;
