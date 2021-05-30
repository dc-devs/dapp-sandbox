import axios from 'axios';
import TokenBalancesResponse from '../../interfaces/token-balances-response-interface';

interface AxiosResponse {
	data: TokenBalancesResponse;
}

const getTokenBalances = async (
	address: string
): Promise<TokenBalancesResponse> => {
	const url = `http://localhost:3001/token-balances?address=${address}&currency=usd`;
	const response: AxiosResponse = await axios.get(url);
	const { data } = response;

	return data;
};

export default getTokenBalances;
