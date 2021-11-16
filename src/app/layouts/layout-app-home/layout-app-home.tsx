import Logo from '../logo';
import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import WalletConnectionStatus from '../../components/wallet-connection-status';
import WalletConnectButton from '../../components/wallet-connect/connect-to-a-wallet-button';
import {
	selectMetaMaskWallet,
} from '../../../redux/slices/metamask-slice';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
	},
	appBar: {
		backgroundColor: 'white',
		color: '#bbb',
	},
}));

interface Props {
	children: JSX.Element;
}

const LayoutAppHome = ({ children }: Props) => {
	const classes = useStyles();
	const metaMaskWallet = useSelector(selectMetaMaskWallet);

	const walletConnectComponent = metaMaskWallet.isConnected ? (
		<WalletConnectionStatus />
	) : (
		<WalletConnectButton />
	);

	return (
		<div data-testid="layoutAppHome" className={classes.root}>
			<AppBar
				elevation={0}
				position="fixed"
				classes={{
					root: classes.appBar,
				}}
			>
				<Container>
					<Toolbar>
						<Logo />
						{walletConnectComponent}
					</Toolbar>
				</Container>
			</AppBar>
			{children}
		</div>
	);
};

export default LayoutAppHome;
