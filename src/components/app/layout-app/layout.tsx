import { ReactNode } from 'react';
import PermanentDrawer from '../../permanent-drawer';
import { makeStyles } from '@material-ui/core/styles';
import { useUpdateMetaMaskWalletData } from '../../../hooks';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

interface Props {
	children: ReactNode;
}

const Layout = ({ children }: Props) => {
	const classes = useStyles();
	useUpdateMetaMaskWalletData();

	return (
		<div className={classes.root}>
			<PermanentDrawer logoText="Haven">{children}</PermanentDrawer>
		</div>
	);
};

export default Layout;
