import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import emailRegex from '../../constants/email-regex';

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
	errorContainer: {
		textAlign: 'left',
		marginLeft: theme.spacing(1),
		color: theme.palette.error.main,
	},
}));

interface Props {
	handleSubmit: any;
	onSubmit: any;
	errors: any;
	register: any;
	watch: any;
	displayPasswordConfirmation?: boolean;
}

const SignInForm = ({
	watch,
	errors,
	register,
	onSubmit,
	handleSubmit,
	displayPasswordConfirmation = false,
}: Props) => {
	const classes = useStyles();

	const passwordConfirmationHTML = displayPasswordConfirmation ? (
		<TextField
			fullWidth
			autoComplete="off"
			type="password"
			id="password-confirmation"
			label="password confirmation"
			name="passwordConfirmation"
			error={!!errors.passwordConfirmation}
			inputRef={register({
				required: true,
				minLength: 8,
				validate: (value: string) => value === watch('password'),
			})}
		/>
	) : (
		''
	);

	return (
		<form
			className={classes.form}
			noValidate
			autoComplete="off"
			onSubmit={handleSubmit(onSubmit)}
		>
			<TextField
				fullWidth={true}
				autoComplete="on"
				id="email"
				label="email"
				name="email"
				error={!!errors.email}
				inputRef={register({
					required: true,
					pattern: emailRegex,
				})}
			/>
			{errors.email && errors.email.type === 'required' && (
				<div className={classes.errorContainer}>Email is required</div>
			)}
			{errors.email && errors.email.type === 'pattern' && (
				<div className={classes.errorContainer}>Must be an email</div>
			)}
			<TextField
				fullWidth
				autoComplete="off"
				type="password"
				id="password"
				label="password"
				name="password"
				error={!!errors.password}
				inputRef={register({
					required: true,
					minLength: 8,
				})}
			/>
			{errors.password && errors.password.type === 'required' && (
				<div className={classes.errorContainer}>
					Password is required
				</div>
			)}
			{errors.password && errors.password.type === 'minLength' && (
				<div className={classes.errorContainer}>
					Must be minmum 8 characters
				</div>
			)}
			{passwordConfirmationHTML}
			{errors.passwordConfirmation &&
				errors.passwordConfirmation.type === 'required' && (
					<div className={classes.errorContainer}>
						Password Confirmation is required
					</div>
				)}
			{errors.passwordConfirmation &&
				errors.passwordConfirmation.type === 'minLength' && (
					<div className={classes.errorContainer}>
						Must be minmum 8 characters
					</div>
				)}
			{errors.passwordConfirmation &&
				errors.passwordConfirmation.type === 'validate' && (
					<div className={classes.errorContainer}>
						Password and password confirmation do not match
					</div>
				)}
			<Button
				type="submit"
				color="primary"
				variant="contained"
				className={classes.submitButton}
			>
				Submit
			</Button>
		</form>
	);
};

export default SignInForm;
