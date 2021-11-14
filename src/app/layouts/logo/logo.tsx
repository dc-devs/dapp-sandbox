import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link as ReactLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(() => ({
	logoContainer: {
		display: 'flex',
		flexGrow: 1,
		alignItems: 'center',
		justifyItems: 'center',
	},
	logo: {
		marginRight: '10px',
	},
}));

const Logo = () => {
	const classes = useStyles();

	return (
		<div className={classes.logoContainer}>
			{/* <LogoSvg dataTestId="LogoSvg" className={classes.logo} /> */}
			<Link
				to="/"
				color="primary"
				underline="none"
				component={ReactLink}
				className={classes.logoContainer}
				data-testid="LogoLink"
			>
				<Typography data-testid="LogoText" variant="h6">
					DApp Sandbox
				</Typography>
			</Link>
		</div>
	);
};

export default Logo;
