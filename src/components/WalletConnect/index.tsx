// import useIsMetaMaskInstalled from '../../hooks/useIsMetaMaskInstalled';
import ConnectToAWalletButton from '../buttons/ConnectToAWalletButton';
import WalletAccountData from '../WalletAccountData';

const WalletConnect = () => {
	const isWalletConnected = false;
	const ConnectToAWalletButtonHTML = ConnectToAWalletButton();
	const WalletAccountDataHTML = WalletAccountData();

	// useIsMetaMaskInstalled();

	return (
		<>
			{isWalletConnected
				? WalletAccountDataHTML
				: ConnectToAWalletButtonHTML}
		</>
	);
};

export default WalletConnect;
