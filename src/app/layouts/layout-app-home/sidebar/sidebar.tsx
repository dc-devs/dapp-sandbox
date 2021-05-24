import Paper from '@material-ui/core/Paper';
import AccountDropdown from '../../../screens/dashboard/components/account-dropdown';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { BarChart } from 'react-feather';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	sidebar: {
		width: drawerWidth,
		height: '100vh',
	},
	logo: {
		marginTop: theme.spacing(2),
	},
	sidebarContent: {
		padding: theme.spacing(3),
		height: '100vh',
	},
	logoText: {
		color: theme.palette.primary.main,
		textAlign: 'center',
		fontSize: '2rem',
	},
	sidebarLinksContainer: {
		marginTop: '50px',
	},
	sidebarLinkContainer: {
		display: 'flex',
		alignContent: 'center',
		cursor: 'pointer',
	},
	sidebarLinkLogo: {
		marginRight: '10px',
		color: theme.palette.primary.main,
	},
	sidebarLinkText: {
		fontSize: '1.2rem',
		color: theme.palette.primary.main,
	},
}));

interface Props {
	logoText: string;
}

const PermanentDrawer = ({ logoText }: Props) => {
	const classes = useStyles();
	return (
		<Paper elevation={2} square={true} className={classes.sidebar}>
			<div className={classes.sidebarContent}>
				<div className={classes.logo}>
					<Typography className={classes.logoText}>
						{logoText}
					</Typography>
				</div>
				<AccountDropdown />
				<div className={classes.sidebarLinksContainer}>
					<div className={classes.sidebarLinkContainer}>
						<BarChart className={classes.sidebarLinkLogo} />
						<Typography className={classes.sidebarLinkText}>
							Dashboard
						</Typography>
					</div>
				</div>
			</div>
		</Paper>
	);
};

export default PermanentDrawer;
