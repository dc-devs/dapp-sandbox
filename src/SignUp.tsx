import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	root: {},
}));

const SignUp = () => {
	const classes = useStyles();

	return <div className={classes.root}>SignUp</div>;
};

export default SignUp;
