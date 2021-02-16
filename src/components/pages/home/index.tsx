import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	root: {},
}));

const Home = () => {
	const classes = useStyles();

	return <div className={classes.root}></div>;
};

export default Home;
