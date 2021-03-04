import { ReactNode } from 'react';
import SideBar from '../sidebar';
import { makeStyles } from '@material-ui/core/styles';
// import { useUpdateMetaMaskWalletData } from '../../../hooks';

const useStyles = makeStyles((theme) => ({
	layoutContainer: {
		display: 'flex',
		width: '100vw',
	},
	sidebarContainer: {
		'flex-grow': '0',
	},
	pageContainer: {
		'flex-grow': '1',
		backgroundColor: 'rgba(0,0,0, 0.01)',
	},
}));

interface Props {
	children: ReactNode;
}

const Layout = ({ children }: Props) => {
	const classes = useStyles();
	// useUpdateMetaMaskWalletData();

	return (
		<div className={classes.layoutContainer}>
			<div className={classes.sidebarContainer}>
				<SideBar logoText="Haven"></SideBar>
			</div>
			<div className={classes.pageContainer}>{children}</div>
		</div>
	);
};

export default Layout;
