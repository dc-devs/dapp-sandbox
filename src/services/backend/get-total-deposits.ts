import axios from 'axios';
import TokenDepositsResponse from '../../interfaces/total-deposits-response-interface';
import environment from '../../constants/environment';

const { NODE_ENV } = process.env;
const { serverBaseUrl } = environment[NODE_ENV];

interface AxiosResponse {
	data: TokenDepositsResponse;
}

const getTokenBalances = async (): Promise<TokenDepositsResponse> => {
	const url = `${serverBaseUrl}/get-total-deposits`;
	const response: AxiosResponse = await axios.get(url);
	const { data } = response;

	return data;
};

export default getTokenBalances;
