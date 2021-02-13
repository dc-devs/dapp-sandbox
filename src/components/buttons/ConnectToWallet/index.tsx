import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	metaMaskConnectContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: '12px',
		border: `1px solid #eceff1`,
	},
	accountInfo: {
		padding: '.3rem .5rem',
		color: theme.palette.text.primary,
	},
}));

const ConnectToWallet = () => {
	const classes = useStyles();

	return (
		<div className={classes.metaMaskConnectContainer}>
			<Typography className={classes.accountInfo}>
				Connect to a wallet
			</Typography>
		</div>
	);
};

export default ConnectToWallet;
