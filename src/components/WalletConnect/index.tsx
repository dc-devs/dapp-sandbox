import useIsMetaMaskInstalled from '../../hooks/useIsMetaMaskInstalled';
import ConnectToWalletButton from '../buttons/ConnectToWalletButton';
import WalletAccountData from '../WalletAccountData';

const WalletConnect = () => {
	const isWalletConnected = false;
	const ConnectToWalletButtonHTML = ConnectToWalletButton();
	const WalletAccountDataHTML = WalletAccountData();

	useIsMetaMaskInstalled();

	return (
		<>
			{isWalletConnected
				? WalletAccountDataHTML
				: ConnectToWalletButtonHTML}
		</>
	);
};

export default WalletConnect;
