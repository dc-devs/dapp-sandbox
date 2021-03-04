import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getIsMetaMaskConnected } from '../../services/metamask';

interface MetaMask {
	status: string;
	error: null | string;
	isConnected: boolean;
}

interface State {
	metaMaskConnected: MetaMask;
}

// Export Thunks
// ---------------
export const setIsMetaMaskConnected = createAsyncThunk(
	'metaMaskConnected/setIsMetaMaskConnected',
	async () => {
		return await getIsMetaMaskConnected();
	}
);

export const metaMaskSlice = createSlice({
	name: 'metaMaskConnected',
	initialState: {
		isConnected: false,
		status: 'idle',
		error: null,
	},
	reducers: {
		updateIsMetaMaskConnected: (state, { payload }) => {
			state.isConnected = payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(setIsMetaMaskConnected.pending, (state) => {
			state.status = 'loading';
		});

		builder.addCase(setIsMetaMaskConnected.fulfilled, (state, action) => {
			state.status = 'succeeded';
			state.isConnected = action.payload;
		});

		builder.addCase(setIsMetaMaskConnected.rejected, (state) => {
			state.status = 'failed';
		});
	},
});

const { reducer, actions } = metaMaskSlice;

// Export Actions
// ------------------
export const { updateIsMetaMaskConnected } = actions;

// Export Selectors
// ------------------
const selectIsMetaMaskConnected = (state: State) => {
	return state.metaMaskConnected.isConnected;
};

const selectIsMetaMaskConnectedStatus = (state: State) => {
	return state.metaMaskConnected.status;
};

const selectIsMetaMaskConnectedError = (state: State) => {
	return state.metaMaskConnected.error;
};

export {
	selectIsMetaMaskConnected,
	selectIsMetaMaskConnectedError,
	selectIsMetaMaskConnectedStatus,
};

// Export Reducer
// ------------------
export default reducer;
