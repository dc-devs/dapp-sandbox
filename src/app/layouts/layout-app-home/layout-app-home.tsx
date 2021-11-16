import Logo from '../logo';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import WalletConnect from '../../components/wallet-connect';

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
						<WalletConnect />
					</Toolbar>
				</Container>
			</AppBar>
			{children}
		</div>
	);
};

export default LayoutAppHome;
