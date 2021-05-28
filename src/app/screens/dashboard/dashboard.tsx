import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import formatBnToFiat from '../../../utils/format-bn-to-fiat';
import getTokenSymbols from '../../../utils/get-token-symbols';
import getTotalAssetValue from '../../../utils/get-total-asset-value';
import filterTokenBalances from '../../../utils/filter-token-balances';
import { selectMetaMaskWallet } from '../../../redux/slices/metamask-slice';
import getTokenDisplayData from '../../../utils/get-token-display-data';
import AssetDollarSummary from './components/asset-dollar-summary';
import AssetSummary from './components/asset-summary';
// import Transactions from './components/transactions';
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
}));

const DashBoard = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { selectedAddress } = useSelector(selectMetaMaskWallet);
	const tokenBalances = useSelector(selectTokenBalances);
	const tokenBalancesStatus = useSelector(selectTokenBalancesStatus);
	const tokenBalancesError = useSelector(selectTokenBalancesError);
	const tokenData = useSelector(selectTokenData);
	const tokenDataStatus = useSelector(selectTokenDataStatus);
	const tokenDataError = useSelector(selectTokenDataError);
	const filteredTokenBalances = filterTokenBalances({
		tokenBalances,
		filterZeros: true,
	});
	const tokenDisplayData = getTokenDisplayData({
		tokenData,
		tokenBalances: filteredTokenBalances,
	});

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

	const totalAssetValueFiat = formatBnToFiat({
		currency: 'usd',
		format: '0,0.00',
		bigNumber: totalAssetValue,
	});

	return (
		<div className={classes.pageContainer}>
			<div className={classes.dashboardDataContainer}>
				<AssetDollarSummary totalAssetValueFiat={totalAssetValueFiat} />
				<AssetSummary
					tokenDisplayData={tokenDisplayData}
					totalAssetValueFiat={totalAssetValueFiat}
				/>
				{/* 
					<Grid item xs={12}>
						{/* <Transactions /> */}
				{/* </Grid>  */}
			</div>
		</div>
	);
};

export default DashBoard;
