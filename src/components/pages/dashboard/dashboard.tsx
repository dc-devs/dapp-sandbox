import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100vw',
		height: '100vh',
	},
	dashboardTitle: {
		fontSize: '5rem',
		color: theme.palette.primary.main,
	},
}));

const Dashboard = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography className={classes.dashboardTitle}>
				Dashboard
			</Typography>
		</div>
	);
};

export default Dashboard;
