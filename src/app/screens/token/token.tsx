import { useParams } from 'react-router-dom';

interface Params {
	[key: string]: string;
}

const Token = () => {
	const params = useParams();
	const { symbol } = params as Params;

	return <></>;
};

export default Token;
