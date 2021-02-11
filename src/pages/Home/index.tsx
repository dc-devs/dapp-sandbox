import { makeStyles } from '@material-ui/core/styles';
import useIsMetaMaskInstalled from '../../hooks/useIsMetaMaskInstalled';

const useStyles = makeStyles(() => ({
	root: {},
}));

const Home = () => {
	const classes = useStyles();

	useIsMetaMaskInstalled();

	return <div className={classes.root}></div>;
};

export default Home;
