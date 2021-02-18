import { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import WalletConnect from '../../features/wallet-connect';
import Logo from './logo';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
	},
	appBar: {
		backgroundColor: 'white',
		boxShadow: 'none',
		color: '#bbb',
	},
}));

interface Props {
	children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar
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

export default Layout;
