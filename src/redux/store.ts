import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import metaMaskReducer from './slices/metamask-slice';
import contractReducer from './slices/contract-slice';
import transactionReducer from './slices/transaction-slice';

export default configureStore({
	reducer: {
		transaction: transactionReducer,
		metaMask: metaMaskReducer,
		contract: contractReducer,
	},
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});
