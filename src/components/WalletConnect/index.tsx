import useIsMetaMaskInstalled from '../../hooks/useIsMetaMaskInstalled';
import ConnectToWallet from '../buttons/ConnectToWallet';
import WalletAccountData from '../WalletAccountData';

const WalletConnect = () => {
	const isWalletConnected = false;
	const ConnectToWalletHTML = ConnectToWallet();
	const WalletAccountDataHTML = WalletAccountData();

	useIsMetaMaskInstalled();

	return (
		<>{isWalletConnected ? WalletAccountDataHTML : ConnectToWalletHTML}</>
	);
};

export default WalletConnect;
