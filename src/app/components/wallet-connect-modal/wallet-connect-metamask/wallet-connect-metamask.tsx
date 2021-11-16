import { ethers } from 'ethers';
import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WalletConnectBase from '../wallet-connect-base';
import detectEthereumProvider from '@metamask/detect-provider';
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
					const { provider } = new ethers.providers.Web3Provider(
						ethereum
					) as any;

					await provider.request({
						method: 'eth_requestAccounts',
					});

					dispatch(
						updateMetaMaskWallet({
							isInstalled: true,
							isConnected: true,
							selectedAddress: provider.selectedAddress,
						})
					);
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
