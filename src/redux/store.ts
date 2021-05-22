import contractReducer from './slices/contract-slice';
import metaMaskReducer from './slices/metamask-slice';
import transactionReducer from './slices/transaction-slice';
import tokenBalancesReducer from './slices/token-balances-slice';
import tokenDataReducer from './slices/token-data-slice';
import metaMaskConnectedReducer from './slices/metamask-connected-slice';
import metaMaskInstalledReducer from './slices/metamask-installed-slice';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

export default configureStore({
	reducer: {
		contract: contractReducer,
		metaMask: metaMaskReducer,
		tokenData: tokenDataReducer,
		transaction: transactionReducer,
		tokenBalances: tokenBalancesReducer,
		metaMaskConnected: metaMaskConnectedReducer,
		metaMaskInstalled: metaMaskInstalledReducer,
	},
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});
