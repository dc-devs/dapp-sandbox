// import Paper from '@material-ui/core/Paper';
import Logo from '../../icons/logo';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	pageContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100vh',
	},
	signUpWrapper: {
		display: 'flex',
		flexDirection: 'column',
		padding: theme.spacing(2),
		width: '350px',
	},
	logoContainer: {
		textAlign: 'center',
	},
	logo: {
		width: '4rem',
		height: '4rem',
	},
	signUpContainer: {
		textAlign: 'center',
		marginTop: '30px',
	},
	signUpText: {
		fontSize: '1.5rem',
	},
	form: {
		marginTop: '10px',
		display: 'flex',
		flexDirection: 'column',
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
		},
	},
	submitButton: {
		marginTop: '30px',
		width: '100%',
		margin: theme.spacing(1),
	},
}));

const SignUp = () => {
	const classes = useStyles();

	return (
		<div className={classes.pageContainer}>
			<div className={classes.signUpWrapper}>
				<div className={classes.logoContainer}>
					<Logo className={classes.logo} />
				</div>
				<div className={classes.signUpContainer}>
					<Typography color="primary" className={classes.signUpText}>
						Create an account
					</Typography>
					<form
						className={classes.form}
						noValidate
						autoComplete="off"
					>
						<TextField fullWidth={true} id="email" label="email" />
						<TextField fullWidth id="password" label="password" />
						<TextField
							fullWidth
							id="password-confirmation"
							label="password confirmation"
						/>
						<Button
							className={classes.submitButton}
							color="primary"
							variant="contained"
						>
							Submit
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
