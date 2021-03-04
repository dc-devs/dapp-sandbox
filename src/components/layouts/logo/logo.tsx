import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import { Link as ReactLink } from 'react-router-dom';
// import Link from '@material-ui/core/Link';

const useStyles = makeStyles(() => ({
	title: {
		flexGrow: 1,
	},
}));

const Logo = () => {
	const classes = useStyles();

	return (
		<Typography variant="h6" className={classes.title}>
			{/* <Link to="/" color="primary" underline="none" component={ReactLink}>
				DApp
			</Link> */}
		</Typography>
	);
};

export default Logo;
