import Transaction from './transaction-interface';

interface TransactionsResponse {
	percentSupported: number;
	supportedTransactions: Transaction[];
	nonSupportedTransactions: any[];
}

export default TransactionsResponse;
