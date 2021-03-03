import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTransactions } from '../../services/etherscan';

interface Transaction {
	transactions: any[];
	status: string;
	error: null | string;
}

interface State {
	transaction: Transaction;
}

// Export Thunks
// ---------------
export const fetchTransactions = createAsyncThunk(
	'transaction/fetchTransactions',
	async (address: string) => {
		const transactions = (await getTransactions(address)) as [];
		return transactions;
	}
);

export const transactionSlice = createSlice({
	name: 'transaction',
	initialState: {
		transactions: [],
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchTransactions.pending, (state, action) => {
			state.status = 'loading';
		});

		builder.addCase(fetchTransactions.fulfilled, (state, action) => {
			state.status = 'succeeded';
			state.transactions = action.payload;
		});

		builder.addCase(fetchTransactions.rejected, (state, action) => {
			state.status = 'failed';
		});
	},
});

const { reducer } = transactionSlice;

// Export Selectors
// ------------------
const selectTransactions = (state: State) => {
	return state.transaction.transactions;
};

const selectTransactionsStatus = (state: State) => {
	return state.transaction.status;
};

const selectTransactionsError = (state: State) => {
	return state.transaction.error;
};

export {
	selectTransactions,
	selectTransactionsStatus,
	selectTransactionsError,
};

// Export Reducer
// ------------------
export default reducer;
