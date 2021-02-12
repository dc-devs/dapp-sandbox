import { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as ReactLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
	},
	appBar: {
		backgroundColor: 'white',
		boxShadow: 'none',
		borderBottom: `1px solid #eceff1`,
		color: '#bbb',
	},
	metaMaskContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#eceff1',
		borderRadius: '12px',
	},
	addressContainer: {
		border: `1px solid #eceff1`,
		borderRadius: '12px',
		backgroundColor: 'white',
		zIndex: 3,
	},
	accountInfo: {
		padding: '.3rem .5rem',
		color: theme.palette.text.primary,
	},
	button: {
		// border: '1px solid rgba(111,76,255,1.0)',
		// boxShadow: '0 0 24px 0 rgb(111 76 255 / 32%)',
		padding: '15px 25px',
		color: 'rgba(255,255,255,0.96)',
		borderRadius: '4px',
		background: 'rgba(111,76,255,0.1)',
		transition: 'all 0.3s ease',
		opacity: '1',
		border: '2px solid rgb(166,150,231)',
		boxShadow: ' 0 0 24px 0 rgb(111 76 255 / 32%)',
	},
}));

interface Props {
	children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar
				position="fixed"
				classes={{
					root: classes.appBar,
				}}
			>
				<Container>
					<Toolbar>
						<Typography variant="h6" className={classes.title}>
							<Link
								to="/"
								color="primary"
								underline="none"
								component={ReactLink}
							>
								DApp
							</Link>
						</Typography>
						<div className={classes.metaMaskContainer}>
							<Typography className={classes.accountInfo}>
								0.3067 ETH
							</Typography>
							<div className={classes.addressContainer}>
								<Typography className={classes.accountInfo}>
									0x9881...CC0D
								</Typography>
							</div>
						</div>
					</Toolbar>
				</Container>
			</AppBar>
			{children}
		</div>
	);
};

export default Layout;
