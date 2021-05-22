import axios from 'axios';
import LunaTokenData from './luna-token-data-interface';
import TokenData from './token-data-interface';

const convertArrayToObject = (dataArray: []) => {
	const tokenData = {} as TokenData;

	dataArray.forEach((lunaTokenData: LunaTokenData) => {
		tokenData[lunaTokenData.symbol] = lunaTokenData;
	});

	return tokenData;
};

const getTokenData = async (symbols: string) => {
	const apiKey = process.env.REACT_APP_LUNA_CRUSH_API_KEY;
	const url = `https://api.lunarcrush.com/v2?data=assets&key=${apiKey}&data_points=1&symbol=${symbols}`;
	const response: any = await axios.get(url);
	const { data } = response.data;
	const tokenData = convertArrayToObject(data);

	return tokenData;
};

export default getTokenData;
