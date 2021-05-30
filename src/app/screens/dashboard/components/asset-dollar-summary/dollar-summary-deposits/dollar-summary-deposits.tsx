import { useEffect } from 'react';
import DollarSummary from '../dollar-summary';
import { useSelector, useDispatch } from 'react-redux';
import {
	fetchTotalDeposits,
	selectTotalDeposits,
	selectTotalDepositsStatus,
	selectTotalDepositsError,
} from '../../../../../../redux/slices/total-deposits-slice';

const DollarSummaryDeposits = () => {
	const dispatch = useDispatch();
	const totalDeposits = useSelector(selectTotalDeposits);
	const totalDepositsStatus = useSelector(selectTotalDepositsStatus);
	const totalDepositsError = useSelector(selectTotalDepositsError);

	// GET Token Balances
	useEffect(() => {
		if (totalDepositsStatus === 'idle') {
			dispatch(fetchTotalDeposits());
		}
	}, [totalDepositsStatus, dispatch]);

	const { formatted } = totalDeposits;

	return (
		<DollarSummary title="Fiat Deposited" amount={formatted || '$0.00'} />
	);
};

export default DollarSummaryDeposits;
