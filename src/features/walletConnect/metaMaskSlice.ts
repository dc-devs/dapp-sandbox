import { createSlice } from '@reduxjs/toolkit';

interface MetaMaskState {
	isInstalled: boolean;
}

interface State {
	metaMask: MetaMaskState;
	isInstalled: boolean;
}

export const metaMaskSlice = createSlice({
	name: 'metaMask',
	initialState: {
		isInstalled: false,
	},
	reducers: {
		updateIsInstalled: (state, { payload }) => {
			state.isInstalled = payload;
		},
	},
});

const { reducer, actions } = metaMaskSlice;
export const { updateIsInstalled } = actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectIsInstalled = (state: State) => {
	return state.metaMask.isInstalled;
};

export default reducer;
