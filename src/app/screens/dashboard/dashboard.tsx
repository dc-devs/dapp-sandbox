import { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AssetPieChart from './components/asset-pie-chart';
import TokenBalances from './components/token-balances';
import { selectMetaMaskWallet } from '../../../redux/slices/metamask-slice';
import filterTokenBalances from './components/token-balances/utils/filter-token-balances';
import getTokenSymbols from './components/token-balances/utils/get-token-symbols';
import getTotalAssetValue from './utils/get-total-asset-value';
import formatBnNToUsd from '../../../utils/format-bn-to-usd';
import { useSelector, useDispatch } from 'react-redux';
import {
	fetchTokenBalances,
	selectTokenBalances,
	selectTokenBalancesStatus,
	selectTokenBalancesError,
} from '../../../redux/slices/token-balances-slice';
import {
	fetchTokenData,
	selectTokenData,
	selectTokenDataStatus,
	selectTokenDataError,
} from '../../../redux/slices/token-data-slice';
// import Transactions from './components/transactions';

const useStyles = makeStyles((theme) => ({
	pageContainer: {
		height: '100vh',
		padding: theme.spacing(3),
	},
	header: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: theme.spacing(2),
	},
	headerText: {
		fontSize: '2rem',
	},
	dashboardDataContainer: {
		'flex-grow': '1',
		padding: `${theme.spacing(2)}px ${theme.spacing(5)}px`,
		height: '100vh',
	},
	assetSummaryContainer: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
	},
	valuationContainer: {
		padding: theme.spacing(2),
	},
	valuation: {
		textAlign: 'center',
		fontSize: '1.5rem',
		color: theme.palette.primary.main,
	},
	portfolioContainer: {
		marginTop: theme.spacing(2),
		padding: theme.spacing(2),
	},
	portfolioHeader: {},
	allocationPieChart: {},
}));

const PermanentDrawer = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { selectedAddress } = useSelector(selectMetaMaskWallet);
	const tokenBalances = useSelector(selectTokenBalances);
	const tokenBalancesStatus = useSelector(selectTokenBalancesStatus);
	const tokenBalancesError = useSelector(selectTokenBalancesError);
	const tokenData = useSelector(selectTokenData);
	const tokenDataStatus = useSelector(selectTokenDataStatus);
	const tokenDataError = useSelector(selectTokenDataError);
	const filteredTokenBalances = filterTokenBalances(tokenBalances);

	// GET Token Balances
	useEffect(() => {
		if (selectedAddress && tokenBalancesStatus === 'idle') {
			dispatch(fetchTokenBalances(selectedAddress));
		}
	}, [tokenBalancesStatus, selectedAddress, dispatch]);

	// GET Token Data
	useEffect(() => {
		if (
			selectedAddress &&
			filteredTokenBalances.length > 0 &&
			tokenDataStatus === 'idle'
		) {
			const symbols = getTokenSymbols(filteredTokenBalances);
			dispatch(fetchTokenData(symbols));
		}
	}, [tokenDataStatus, selectedAddress, filteredTokenBalances, dispatch]);

	// Get Total Asset Value
	const totalAssetValue = getTotalAssetValue({
		tokenBalances: filteredTokenBalances,
		tokenData,
	});

	console.log('totalAssetValue', formatBnNToUsd(totalAssetValue));

	return (
		<div className={classes.pageContainer}>
			<div className={classes.header}>
				<Typography className={classes.headerText}>
					Dashboard
				</Typography>
				<Typography>
					View your transactions, analyze your portfolio, and much
					more
				</Typography>
			</div>

			<div className={classes.dashboardDataContainer}>
				<Grid
					container
					direction="row"
					justify="flex-start"
					alignItems="flex-start"
					spacing={3}
				>
					<Grid item xs>
						<div className={classes.assetSummaryContainer}>
							<Paper
								elevation={2}
								className={classes.valuationContainer}
							>
								<Typography>USD Valuation</Typography>
								<Typography className={classes.valuation}>
									{formatBnNToUsd(totalAssetValue)}
								</Typography>
							</Paper>
							<Paper
								elevation={2}
								className={classes.portfolioContainer}
							>
								<Typography className={classes.portfolioHeader}>
									Allocations
								</Typography>
								<div className={classes.allocationPieChart}>
									<AssetPieChart />
								</div>
							</Paper>
						</div>
					</Grid>
					<Grid item xs={8}>
						<TokenBalances
							tokenData={tokenData}
							tokenBalances={filteredTokenBalances}
						/>
					</Grid>
					<Grid item xs={12}>
						{/* <Transactions /> */}
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default PermanentDrawer;
