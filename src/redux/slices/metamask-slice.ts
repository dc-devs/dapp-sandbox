import { createSlice } from '@reduxjs/toolkit';

interface MetaMaskState {
	isMetaMaskInstalled: boolean;
	isMetaMaskConnected: boolean;
}

interface State {
	metaMask: MetaMaskState;
}

export const metaMaskSlice = createSlice({
	name: 'metaMask',
	initialState: {
		isMetaMaskInstalled: false,
		isMetaMaskConnected: false,
	},
	reducers: {
		updateIsMetaMaskInstalled: (state, { payload }) => {
			state.isMetaMaskInstalled = payload;
		},
		updateIsMetaMaskConnected: (state, { payload }) => {
			state.isMetaMaskConnected = payload;
		},
	},
});

const { reducer, actions } = metaMaskSlice;

// Export Actions
// ------------------
export const { updateIsMetaMaskInstalled, updateIsMetaMaskConnected } = actions;

// Export Selectors
// ------------------
const selectIsMetaMaskInstalled = (state: State) => {
	return state.metaMask.isMetaMaskInstalled;
};

const selectIsMetaMaskConnected = (state: State) => {
	return state.metaMask.isMetaMaskConnected;
};

export { selectIsMetaMaskInstalled, selectIsMetaMaskConnected };

// Export Reducer
// ------------------
export default reducer;
