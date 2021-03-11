import axios from 'axios';
import Logo from '../../icons/logo';
import { useForm } from 'react-hook-form';
import SignInForm from '../../sign-in-form';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import environment from '../../../constants/environment';

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

const SignUp = () => {
	const classes = useStyles();
	const { register, handleSubmit, errors, watch } = useForm();
	const { development, headers } = environment;
	const { serverBaseUrl } = development;

	const onSubmit = async (data: any) => {
		console.log('Submitted!!');
		axios.post(`${serverBaseUrl}/users`, { data }, { headers });
	};

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
					<SignInForm
						watch={watch}
						errors={errors}
						register={register}
						onSubmit={onSubmit}
						handleSubmit={handleSubmit}
						displayPasswordConfirmation={true}
					/>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
