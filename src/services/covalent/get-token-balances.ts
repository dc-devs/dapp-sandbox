import axios from 'axios';

const getTokenBalances = async (address: string) => {
	const chainId = process.env.REACT_APP_CHAIN_ID;
	const convalentApiKey = process.env.REACT_APP_COVALENT_API_KEY;
	const url = `//api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/?nft=true&no-nft-fetch=true&key=${convalentApiKey}`;
	const response: any = await axios.get(url);
	const { data } = response.data;
	const { items } = data;

	return items;
};

export default getTokenBalances;
