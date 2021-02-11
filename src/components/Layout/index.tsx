import { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as ReactLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

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
		borderBottom: `1px solid #ddd`,
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
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						<Link
							to="/"
							color="primary"
							underline="none"
							component={ReactLink}
						>
							DApp
						</Link>
					</Typography>
				</Toolbar>
			</AppBar>
			{children}
		</div>
	);
};

export default Layout;
