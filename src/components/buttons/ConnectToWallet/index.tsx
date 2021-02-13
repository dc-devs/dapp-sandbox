import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

const ConnectToWallet = () => {
	const classes = useStyles();

	return (
		<>
			<Button className={classes.buttonRoot} disableRipple={true}>
				<Typography className={classes.buttonText}>
					Connect to a wallet
				</Typography>
			</Button>
		</>
	);
};

export default ConnectToWallet;
