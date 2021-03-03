import { ethers } from 'ethers';
import { useState } from 'react';
import Web3 from 'web3';
import BigNumber from 'bignumber.js';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import infuraProvider from '../../services/ethers/infura-provider';
import shortenWalletAddress from '../../utils/shorten-wallet-address';
import {
	fetchContract,
	selectContract,
	selectContractError,
	selectContractStatus,
} from '../../redux/slices/contract-slice';

var web3 = new Web3(process.env.REACT_APP_INFURA_RPC_URL as string);

const useStyles = makeStyles((theme) => ({
	transactionContainer: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
		padding: theme.spacing(2),
	},
}));

interface TransactionModel {
	to: string;
	from: string;
	hash: string;
	input: string;
	value: BigNumber;
	type: string;
	timeStamp: string;
}

interface Props {
	transaction: TransactionModel;
}

const Transaction = ({ transaction }: Props) => {
	const classes = useStyles();

	const dispatch = useDispatch();
	const contractAbi = useSelector(selectContract);
	const contractStatus = useSelector(selectContractStatus);
	const contractError = useSelector(selectContractError);
	let [toTransactionType, setToTransactionType] = useState('');
	let [fromTransactionType, setFromTransactionType] = useState('');

	useEffect(() => {
		web3.eth.getCode(transaction.to, (error, code) => {
			if (code === '0x') {
				console.log('Wallet:', transaction.to);
				setToTransactionType('Wallet');
			} else {
				console.log('Contract', transaction.to);
				setToTransactionType('Contract');
				if (contractStatus === 'idle') {
					dispatch(fetchContract(transaction.to));
				}
			}
		});
		web3.eth.getCode(transaction.from, (error, code) => {
			if (code === '0x') {
				console.log('Wallet:', transaction.from);
				setFromTransactionType('Wallet');
			} else {
				console.log('Contract', transaction.from);
				setFromTransactionType('Contract');
				if (contractStatus === 'idle') {
					dispatch(fetchContract(transaction.from));
				}
			}
		});
	}, [contractStatus, dispatch, transaction]);

	if (transaction && contractAbi) {
		// const contractInterface = new ethers.utils.Interface(contractAbi);
		// console.log(transaction);
		console.log(contractAbi);
		console.log('ETHERSCAN_TRANSACTION', transaction);
		infuraProvider.getTransaction(transaction.hash).then((tx) => {
			// console.log('ETHERS_TRANSACTION', tx);
			// console.log(contractInterface);
			// console.log(contractInterface.parseTransaction);
			// const decodedInput = contractInterface.parseTransaction(tx);
			// console.log(decodedInput);
			// // Decoded Transaction
			// console.log({
			// 	function_name: decodedInput.name,
			// 	from: tx.from,
			// 	to: decodedInput.args[0],
			// 	erc20Value: Number(decodedInput.args[1]),
			// });
		});
	}

	const { timeStamp, from, to, value } = transaction;

	return (
		<Paper className={classes.transactionContainer}>
			<div>
				{fromTransactionType}: {shortenWalletAddress(from)} {'->'}{' '}
				{toTransactionType}: {shortenWalletAddress(to)}
			</div>
		</Paper>
	);
};

export default Transaction;
