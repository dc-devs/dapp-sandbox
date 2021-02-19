import { createSlice } from '@reduxjs/toolkit';

interface Wallet {
	address: string;
}

interface MetaMask {
	isMetaMaskInstalled: boolean;
	isMetaMaskConnected: boolean;
	wallet: Wallet;
}

interface State {
	metaMask: MetaMask;
}

export const metaMaskSlice = createSlice({
	name: 'metaMask',
	initialState: {
		isMetaMaskInstalled: false,
		isMetaMaskConnected: false,
		wallet: { address: null },
	},
	reducers: {
		updateIsMetaMaskInstalled: (state, { payload }) => {
			state.isMetaMaskInstalled = payload;
		},
		updateIsMetaMaskConnected: (state, { payload }) => {
			state.isMetaMaskConnected = payload;
		},
		updateMetaMaskWalletData: (state, { payload }) => {
			state.wallet = payload;
		},
	},
});

const { reducer, actions } = metaMaskSlice;

// Export Actions
// ------------------
export const {
	updateMetaMaskWalletData,
	updateIsMetaMaskInstalled,
	updateIsMetaMaskConnected,
} = actions;

// Export Selectors
// ------------------
const selectIsMetaMaskInstalled = (state: State) => {
	return state.metaMask.isMetaMaskInstalled;
};

const selectIsMetaMaskConnected = (state: State) => {
	return state.metaMask.isMetaMaskConnected;
};

const selectMetaMaskWalletData = (state: State) => {
	return state.metaMask.wallet;
};

export {
	selectIsMetaMaskInstalled,
	selectIsMetaMaskConnected,
	selectMetaMaskWalletData,
};

// Export Reducer
// ------------------
export default reducer;
