import metaMaskReducer from './slices/metamask-slice';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import metaMaskConnectedReducer from './slices/metamask-connected-slice';
import metaMaskInstalledReducer from './slices/metamask-installed-slice';

export default configureStore({
	reducer: {
		metaMask: metaMaskReducer,
		metaMaskConnected: metaMaskConnectedReducer,
		metaMaskInstalled: metaMaskInstalledReducer,
	},
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});
