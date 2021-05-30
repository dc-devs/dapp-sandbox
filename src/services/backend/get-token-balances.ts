import axios from 'axios';
import TokenBalancesResponse from '../../interfaces/token-balances-response-interface';
import environment from '../../constants/environment';

const { NODE_ENV } = process.env;
const { serverBaseUrl } = environment[NODE_ENV];

interface AxiosResponse {
	data: TokenBalancesResponse;
}

const getTokenBalances = async (
	address: string
): Promise<TokenBalancesResponse> => {
	const url = `${serverBaseUrl}/token-balances?address=${address}&currency=usd`;
	const response: AxiosResponse = await axios.get(url);
	const { data } = response;

	return data;
};

export default getTokenBalances;
