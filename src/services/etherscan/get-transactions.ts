import axios from 'axios';

// TODO: Fix ENV vars
const REACT_APP_ETHERSCAN_API_KEY = process.env.REACT_APP_ETHERSCAN_API_KEY;

const getTransactions = async () => {
	const url = `http://api.etherscan.io/api?module=account&action=txlist&address=0x98818d16dE85fc14681e865389E77dBdEBa4CC0D&startblock=0&endblock=99999999&sort=asc&apikey=${REACT_APP_ETHERSCAN_API_KEY}`;

	// Replace with types
	const response: any = await axios.get(url);
	const { data } = response;
	let result = {};

	if (data) {
		result = data.result;
	}

	return result;
};

export default getTransactions;
