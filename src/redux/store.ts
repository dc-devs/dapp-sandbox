import { configureStore } from '@reduxjs/toolkit';
import metaMaskReducer from '../features/walletConnect/metaMaskSlice';

export default configureStore({
	reducer: {
		metaMask: metaMaskReducer,
	},
});
