import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getContract } from '../../services/etherscan';

interface Contract {
	contract: string;
	status: string;
	error: null | string;
}

interface State {
	contract: Contract;
}

// Export Thunks
// ---------------
export const fetchContract = createAsyncThunk(
	'contract/fetchContract',
	async (contractAddress: string) => {
		const contract = (await getContract(contractAddress)) as string;
		return contract;
	}
);

export const contractSlice = createSlice({
	name: 'contract',
	initialState: {
		contract: '',
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchContract.pending, (state, action) => {
			state.status = 'loading';
		});

		builder.addCase(fetchContract.fulfilled, (state, action) => {
			state.status = 'succeeded';
			state.contract = action.payload;
		});

		builder.addCase(fetchContract.rejected, (state, action) => {
			state.status = 'failed';
		});
	},
});

const { reducer } = contractSlice;

// Export Selectors
// ------------------
const selectContract = (state: State) => {
	return state.contract.contract;
};

const selectContractStatus = (state: State) => {
	return state.contract.status;
};

const selectContractError = (state: State) => {
	return state.contract.error;
};

export { selectContract, selectContractStatus, selectContractError };

// Export Reducer
// ------------------
export default reducer;
