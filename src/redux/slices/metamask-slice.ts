import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getMetaMaskWallet from '../../services/metamask/get-metamask-wallet';

interface Wallet {
	isConnected: boolean;
	isInstalled: boolean;
	selectedAddress: string;
}

interface MetaMask {
	status: string;
	error: null | string;
	wallet: Wallet;
}

interface State {
	metaMask: MetaMask;
}

// Export Thunks
// ---------------
export const fetchMetaMaskWallet = createAsyncThunk(
	'metaMask/fetchMetaMaskWallet',
	async () => {
		return await getMetaMaskWallet();
	}
);

export const metaMaskSlice = createSlice({
	name: 'metaMask',
	initialState: {
		error: null,
		status: 'idle',
		wallet: {
			isConnected: false,
			isInstalled: false,
			selectedAddress: '',
		},
	},
	reducers: {
		updateMetaMaskWallet: (state, { payload }) => {
			state.wallet = payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchMetaMaskWallet.pending, (state) => {
			state.status = 'loading';
		});

		builder.addCase(fetchMetaMaskWallet.fulfilled, (state, action) => {
			state.status = 'succeeded';
			state.wallet = action.payload;
		});

		builder.addCase(fetchMetaMaskWallet.rejected, (state) => {
			state.status = 'failed';
		});
	},
});

const { reducer, actions } = metaMaskSlice;

// Export Actions
// ------------------
export const { updateMetaMaskWallet } = actions;

// Export Selectors
// ------------------
const selectMetaMaskWallet = (state: State) => {
	return state.metaMask.wallet;
};

const selectMetaMaskWalletStatus = (state: State) => {
	return state.metaMask.status;
};

const selectMetaMaskWalletError = (state: State) => {
	return state.metaMask.error;
};

export {
	selectMetaMaskWallet,
	selectMetaMaskWalletError,
	selectMetaMaskWalletStatus,
};

// Export Reducer
// ------------------
export default reducer;
