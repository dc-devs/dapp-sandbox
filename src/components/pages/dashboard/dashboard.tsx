import Drawer from '@material-ui/core/Drawer';
import AccountDropdown from '../../account-dropdown';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
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

const PermanentDrawer = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Drawer
				className={classes.drawer}
				classes={{
					paper: classes.drawerPaper,
				}}
				variant="permanent"
				open
			>
				<div className={classes.drawerContent}>
					<div className={classes.logo}>
						<Typography className={classes.logoText}>
							Haven
						</Typography>
					</div>
					<AccountDropdown />
				</div>
			</Drawer>
		</div>
	);
};

export default PermanentDrawer;
