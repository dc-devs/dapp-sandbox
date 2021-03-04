import { createSlice } from '@reduxjs/toolkit';

interface Wallet {
	selectedAddress: string;
}

interface MetaMask {
	wallet: Wallet;
}

interface State {
	metaMask: MetaMask;
}

export const metaMaskSlice = createSlice({
	name: 'metaMask',
	initialState: {
		wallet: { selectedAddress: null },
	},
	reducers: {
		updateMetaMaskWallet: (state, { payload }) => {
			state.wallet = payload;
		},
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

export { selectMetaMaskWallet };

// Export Reducer
// ------------------
export default reducer;
