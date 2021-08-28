import axios from 'axios';
import environment from '../../constants/environment';
import GetTransactionsProps from '../../interfaces/get-transactions-props-interface';
import Transaction from '../../interfaces/transaction-interface';

const { NODE_ENV } = process.env;
const { serverBaseUrl } = environment[NODE_ENV];

interface AxiosResponse {
	data: any;
}

const getTransactions = async ({
	address,
	filter,
}: GetTransactionsProps): Promise<Transaction[]> => {
	let url = `${serverBaseUrl}/transactions?address=${address}`;
	const response: AxiosResponse = await axios.get(url);
	const { data } = response;

	return data;
};

export default getTransactions;
