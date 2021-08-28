import metaMaskReducer from './slices/metamask-slice';
import transactionsReducer from './slices/transactions-slice';
import totalDepositsReducer from './slices/total-deposits-slice';
import tokenBalancesReducer from './slices/token-balances-slice';
import totalWithdrawlsReducer from './slices/total-withdrawls-slice';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import metaMaskConnectedReducer from './slices/metamask-connected-slice';
import metaMaskInstalledReducer from './slices/metamask-installed-slice';

export default configureStore({
	reducer: {
		metaMask: metaMaskReducer,
		transactions: transactionsReducer,
		tokenBalances: tokenBalancesReducer,
		totalDeposits: totalDepositsReducer,
		totalWithdrawls: totalWithdrawlsReducer,
		metaMaskConnected: metaMaskConnectedReducer,
		metaMaskInstalled: metaMaskInstalledReducer,
	},
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});
