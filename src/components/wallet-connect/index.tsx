import ConnectToAWalletButton from '../buttons/ConnectToAWalletButton';
import WalletAccountData from '../wallet-account-data';

const WalletConnect = () => {
	const isWalletConnected = false;
	const ConnectToAWalletButtonHTML = ConnectToAWalletButton();
	const WalletAccountDataHTML = WalletAccountData();

	return (
		<>
			{isWalletConnected
				? WalletAccountDataHTML
				: ConnectToAWalletButtonHTML}
		</>
	);
};

export default WalletConnect;
