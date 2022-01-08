import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WalletConnectBase from '../wallet-connect-base';
import detectEthereumProvider from '@metamask/detect-provider';
import { getMetaMaskWallet } from '../../../../services/metamask';
import {
	selectMetaMaskWallet,
	updateMetaMaskWallet,
} from '../../../../redux/slices/metamask-slice';

interface Props {
	imgSrc: string;
	walletName: string;
	walletInstallUrl: string;
	walletInstruction: string;
}

const WalletConnectMetaMask = ({
	imgSrc,
	walletName,
	walletInstallUrl,
	walletInstruction,
}: Props) => {
	const dispatch = useDispatch();
	const metaMaskWallet = useSelector(selectMetaMaskWallet);
	const displayWalletInstallUrl = !metaMaskWallet.isInstalled;

	const connectWallet = async (event: SyntheticEvent) => {
		try {
			if (metaMaskWallet.isInstalled) {
				event.preventDefault();
				event.stopPropagation();
			}
			const ethereum = window.ethereum;

			if (ethereum) {
				const metaMaskProvider: any = await detectEthereumProvider({
					mustBeMetaMask: true,
					silent: true,
				});

				if (metaMaskProvider) {
					const wallet = await getMetaMaskWallet({
						requestPermission: true,
					});

					dispatch(updateMetaMaskWallet(wallet));
				}
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<WalletConnectBase
			imgSrc={imgSrc}
			walletName={walletName}
			connectWallet={connectWallet}
			walletInstallUrl={walletInstallUrl}
			walletInstruction={walletInstruction}
			displayWalletInstallUrl={displayWalletInstallUrl}
		/>
	);
};

export default WalletConnectMetaMask;
