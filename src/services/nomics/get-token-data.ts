import axios from 'axios';
import NomicsTokenData from './nomics-token-data-interface';
import TokenData from './token-data-interface';

const convertArrayToObject = (dataArray: []) => {
	const tokenData = {} as TokenData;

	dataArray.forEach((nomicTokenData: NomicsTokenData) => {
		tokenData[nomicTokenData.id] = nomicTokenData;
	});

	return tokenData;
};

const getTokenData = async (symbols: string) => {
	const apiKey = process.env.REACT_APP_NOMICS_API_KEY;
	const url = `http://api.nomics.com/v1/currencies/ticker?key=${apiKey}&interval=1d&convert=USD&per-page=100&page=1&ids=${symbols}`;
	const response: any = await axios.get(url);
	const { data } = response;
	const tokenData = convertArrayToObject(data);

	return tokenData;
};

export default getTokenData;
