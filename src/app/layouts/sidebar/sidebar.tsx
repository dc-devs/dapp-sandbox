import Paper from '@material-ui/core/Paper';
import AccountDropdown from '../../features/account-dropdown';
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
				<div>
					<BarChart />
					<Typography>Dashboard</Typography>
				</div>
			</div>
		</Paper>
	);
};

export default PermanentDrawer;
