import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ModalWalletConnect from '../../modals/ConnectToAWalletModal';

const useStyles = makeStyles((theme) => ({
	buttonRoot: {
		textTransform: 'none',
		borderRadius: '12px',
		border: `1px solid #eceff1`,
	},
	buttonText: {
		padding: '.2rem .4rem',
	},
}));

const ConnectToAWallet = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const toggleModal = () => {
		if (open) {
			setOpen(false);
		} else {
			setOpen(true);
		}
	};

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
				<ModalWalletConnect isOpen={open} />
			</Button>
		</>
	);
};

export default ConnectToAWallet;
