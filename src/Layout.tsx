import { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
	},
}));

interface Props {
	children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						<Link to="/">React Starter Template</Link>
					</Typography>
					<Button color="inherit">
						<Link to="/sign-up">Sign Up</Link>
					</Button>
					<Button color="inherit">
						<Link to="/sign-in">Sign In</Link>
					</Button>
				</Toolbar>
			</AppBar>
			{children}
		</div>
	);
};

export default Layout;
