import metaMaskReducer from './slices/metamask-slice';
import tokenBalancesReducer from './slices/token-balances-slice';
import metaMaskConnectedReducer from './slices/metamask-connected-slice';
import metaMaskInstalledReducer from './slices/metamask-installed-slice';
import totalDepositsReducer from './slices/total-deposits-slice';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

export default configureStore({
	reducer: {
		metaMask: metaMaskReducer,
		tokenBalances: tokenBalancesReducer,
		totalDeposits: totalDepositsReducer,
		metaMaskConnected: metaMaskConnectedReducer,
		metaMaskInstalled: metaMaskInstalledReducer,
	},
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});
