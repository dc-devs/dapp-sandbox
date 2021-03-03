import axios from 'axios';

const REACT_APP_ETHERSCAN_API_KEY = process.env.REACT_APP_ETHERSCAN_API_KEY;

const getContract = async (contractAddress: string) => {
	// const url = `http://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${REACT_APP_ETHERSCAN_API_KEY}`;
	const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413&apikey=${REACT_APP_ETHERSCAN_API_KEY}`;
	// const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=0x98818d16dE85fc14681e865389E77dBdEBa4CC0D&apikey=${REACT_APP_ETHERSCAN_API_KEY}`;

	const response: any = await axios.get(url);
	const { data } = response;
	let result = '';

	if (data) {
		result = data.result;
	}

	return result;
};

export default getContract;
