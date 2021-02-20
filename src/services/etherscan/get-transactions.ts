import axios from 'axios';

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const getTransactions = async () => {
	// const url = `http://api.etherscan.io/api?module=account&action=txlist&address=0x98818d16dE85fc14681e865389E77dBdEBa4CC0D&startblock=0&endblock=99999999&sort=asc&apikey=${ETHERSCAN_API_KEY}`;
	const response = axios.get('http://example.com');

	return response;
};

export default getTransactions;
