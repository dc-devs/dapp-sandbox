import Drawer from '@material-ui/core/Drawer';
import { ReactNode } from 'react';
import AccountDropdown from '../account-dropdown';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		// display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	drawerPaper: {
		width: drawerWidth,
	},
	logo: {
		marginTop: theme.spacing(2),
	},
	drawerContent: {
		padding: theme.spacing(3),
		height: '100vh',
	},
	logoText: {
		color: theme.palette.primary.main,
		textAlign: 'center',
		fontSize: '2rem',
	},
}));

interface Props {
	children: ReactNode;
	logoText: string;
}

const PermanentDrawer = ({ children, logoText }: Props) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Drawer
				className={classes.drawer}
				classes={{
					paper: classes.drawerPaper,
				}}
				anchor="left"
				variant="permanent"
				open
			>
				<div className={classes.drawerContent}>
					<div className={classes.logo}>
						<Typography className={classes.logoText}>
							{logoText}
						</Typography>
					</div>
					<AccountDropdown />
				</div>
			</Drawer>
			{children}
		</div>
	);
};

export default PermanentDrawer;
