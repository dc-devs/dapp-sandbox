import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	metaMaskContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#eceff1',
		borderRadius: '12px',
	},
	addressContainer: {
		border: `1px solid #eceff1`,
		borderRadius: '12px',
		backgroundColor: 'white',
		zIndex: 3,
	},
	accountInfo: {
		padding: '.3rem .5rem',
		color: theme.palette.text.primary,
	},
}));

const MetaMaskAccountData = () => {
	const classes = useStyles();

	return (
		<div className={classes.metaMaskContainer}>
			<Typography className={classes.accountInfo}>0.3067 ETH</Typography>
			<div className={classes.addressContainer}>
				<Typography className={classes.accountInfo}>
					0x9881...CC0D
				</Typography>
			</div>
		</div>
	);
};

export default MetaMaskAccountData;
