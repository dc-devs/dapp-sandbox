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
export const fetchIsMetaMaskConnected = createAsyncThunk(
	'metaMaskConnected/fetchIsMetaMaskConnected',
	async () => {
		const transactions = await getIsMetaMaskConnected();

		return transactions;
	}
);

export const metaMaskSlice = createSlice({
	name: 'metaMaskConnected',
	initialState: {
		isConnected: false,
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchIsMetaMaskConnected.pending, (state) => {
			state.status = 'loading';
		});

		builder.addCase(fetchIsMetaMaskConnected.fulfilled, (state, action) => {
			state.status = 'succeeded';
			state.isConnected = action.payload;
		});

		builder.addCase(fetchIsMetaMaskConnected.rejected, (state) => {
			state.status = 'failed';
		});
	},
});

const { reducer } = metaMaskSlice;

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
