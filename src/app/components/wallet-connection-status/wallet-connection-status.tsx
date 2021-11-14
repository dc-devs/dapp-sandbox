import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {},
}));

// interface Props {
// 	children: JSX.Element;
// }
// { children }: Props

const WalletConnectionStatus = () => {
	const classes = useStyles();

	return <div className={classes.root}>MetaMask is Connected!</div>;
};

export default WalletConnectionStatus;
