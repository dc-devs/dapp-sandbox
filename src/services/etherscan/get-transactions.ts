import axios from 'axios';

// TODO: Fix ENV vars
// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const ETHERSCAN_API_KEY = 'PFYD32UAM9SWUMEMK6ADUU38QYYY9UWYTA';

const getTransactions = async () => {
	console.log('ETHERSCAN_API_KEY', ETHERSCAN_API_KEY);
	const url = `http://api.etherscan.io/api?module=account&action=txlist&address=0x98818d16dE85fc14681e865389E77dBdEBa4CC0D&startblock=0&endblock=99999999&sort=asc&apikey=${ETHERSCAN_API_KEY}`;

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
