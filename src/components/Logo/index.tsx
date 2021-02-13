import Typography from '@material-ui/core/Typography';
import { Link as ReactLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const Logo = () => {
	<Typography variant="h6" className={classes.title}>
		<Link to="/" color="primary" underline="none" component={ReactLink}>
			DApp
		</Link>
	</Typography>;
};

export default Logo;
