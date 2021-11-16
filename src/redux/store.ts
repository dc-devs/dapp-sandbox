import metaMaskReducer from './slices/metamask-slice';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

export default configureStore({
	reducer: {
		metaMask: metaMaskReducer,
	},
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});
