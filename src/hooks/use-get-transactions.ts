import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTransactions } from '../services/etherscan';

const useGetTransactions = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const callGetTransactions = async () => {
			const response = await getTransactions();
			console.log(response);
		};

		callGetTransactions();
	});
};

export default useGetTransactions;
