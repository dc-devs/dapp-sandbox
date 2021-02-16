import { configureStore } from '@reduxjs/toolkit';
import metaMaskReducer from './slices/metamask-slice';

export default configureStore({
	reducer: {
		metaMask: metaMaskReducer,
	},
});
