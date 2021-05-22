import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getTokenData from '../../services/nomics/get-token-data';
import NomicsTokenData from '../../services/nomics/token-data-interface';

interface Transaction {
	tokenData: NomicsTokenData;
	status: string;
	error: null | string;
}

interface State {
	tokenData: Transaction;
}

// Export Thunks
// ---------------
export const fetchTokenData = createAsyncThunk(
	'tokenData/fetchTokenData',
	async (symbols: string) => {
		const tokenData = await getTokenData(symbols);
		return tokenData;
	}
);

export const tokenDataSlice = createSlice({
	name: 'tokenData',
	initialState: {
		tokenData: {},
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchTokenData.pending, (state, action) => {
			state.status = 'loading';
		});

		builder.addCase(fetchTokenData.fulfilled, (state, action) => {
			state.status = 'succeeded';
			state.tokenData = action.payload;
		});

		builder.addCase(fetchTokenData.rejected, (state, action) => {
			state.status = 'failed';
		});
	},
});

const { reducer } = tokenDataSlice;

// Export Selectors
// ------------------
const selectTokenData = (state: State) => {
	return state.tokenData.tokenData;
};

const selectTokenDataStatus = (state: State) => {
	return state.tokenData.status;
};

const selectTokenDataError = (state: State) => {
	return state.tokenData.error;
};

export { selectTokenData, selectTokenDataStatus, selectTokenDataError };

// Export Reducer
// ------------------
export default reducer;
