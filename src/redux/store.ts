import { configureStore } from '@reduxjs/toolkit';
import metaMaskReducer from '../components/features/wallet-connect/metamask-slice';

export default configureStore({
	reducer: {
		metaMask: metaMaskReducer,
	},
});
