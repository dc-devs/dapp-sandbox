import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import metaMaskReducer from './slices/metamask-slice';
import metaMaskConnectedReducer from './slices/metamask-connected-slice';
import metaMaskInstalledReducer from './slices/metamask-installed-slice';
import contractReducer from './slices/contract-slice';
import transactionReducer from './slices/transaction-slice';

export default configureStore({
	reducer: {
		contract: contractReducer,
		metaMask: metaMaskReducer,
		transaction: transactionReducer,
		metaMaskConnected: metaMaskConnectedReducer,
		metaMaskInstalled: metaMaskInstalledReducer,
	},
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});
