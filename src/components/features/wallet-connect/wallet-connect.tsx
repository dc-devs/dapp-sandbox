import { useSelector } from 'react-redux';
import WalletAccountData from './wallet-account-data';
import ConnectToAWalletButton from './connect-to-a-wallet-button';
import { selectIsMetaMaskConnected } from '../../../redux/slices/metamask-slice';

const WalletConnect = () => {
	const ConnectToAWalletButtonHTML = ConnectToAWalletButton();
	const WalletAccountDataHTML = WalletAccountData();
	const isWalletConnected = useSelector(selectIsMetaMaskConnected);

	return (
		<>
			{isWalletConnected
				? WalletAccountDataHTML
				: ConnectToAWalletButtonHTML}
		</>
	);
};

export default WalletConnect;
