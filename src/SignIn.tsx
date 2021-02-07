import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	root: {},
}));

const SignIn = () => {
	const classes = useStyles();

	return <div className={classes.root}>SignIn</div>;
};

export default SignIn;
