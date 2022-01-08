import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WalletConnectStatus from '../../components/wallet-connect-status';
import WalletConnectButton from '../../components/wallet-connect-button/wallet-connect-button';
import {
	fetchMetaMaskWallet,
	selectMetaMaskWallet,
	selectMetaMaskWalletStatus,
} from '../../../redux/slices/metamask-slice';

const WalletConnect = () => {
	const dispatch = useDispatch();
	const metaMaskWallet = useSelector(selectMetaMaskWallet);
	const metaMaskWalletStatus = useSelector(selectMetaMaskWalletStatus);

	useEffect(() => {
		if (metaMaskWalletStatus === 'idle') {
			dispatch(fetchMetaMaskWallet());
		}
	}, [metaMaskWalletStatus, dispatch]);

	const walletConnectComponent =
		metaMaskWalletStatus !== 'succeeded' ? (
			<div /> // Still Loading..
		) : metaMaskWallet.isConnected ? (
			<>
				<WalletConnectStatus />
			</>
		) : (
			<>
				<WalletConnectButton />
			</>
		);

	return walletConnectComponent;
};

export default WalletConnect;
