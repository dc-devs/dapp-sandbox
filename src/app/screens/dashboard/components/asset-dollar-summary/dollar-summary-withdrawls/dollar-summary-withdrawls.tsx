import { useEffect } from 'react';
import DollarSummary from '../dollar-summary';
import { useSelector, useDispatch } from 'react-redux';
import {
	fetchTotalWithdrawls,
	selectTotalWithdrawls,
	selectTotalWithdrawlsStatus,
	// selectTotalWithdrawlsError,
} from '../../../../../../redux/slices/total-withdrawls-slice';

const DollarSummaryDeposits = () => {
	const dispatch = useDispatch();
	const totalWithdrawls = useSelector(selectTotalWithdrawls);
	const totalWithdrawlsStatus = useSelector(selectTotalWithdrawlsStatus);
	// const totalWithdrawlsError = useSelector(selectTotalWithdrawlsError);

	// GET Token Balances
	useEffect(() => {
		if (totalWithdrawlsStatus === 'idle') {
			dispatch(fetchTotalWithdrawls());
		}
	}, [totalWithdrawlsStatus, dispatch]);

	const { formatted } = totalWithdrawls;

	return (
		<DollarSummary title="Fiat Withdrawn" amount={formatted || '$0.00'} />
	);
};

export default DollarSummaryDeposits;
