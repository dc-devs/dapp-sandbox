import { ethers } from 'ethers';
import store from '../../../../redux/store';
import detectEthereumProvider from '@metamask/detect-provider';
import { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { selectIsMetaMaskInstalled } from '../../../../redux/slices/metamask-slice';
import ConnectWalletBase from '../connect-wallet-base';

interface Props {
	imgSrc: string;
	walletName: string;
	walletInstallUrl: string;
	walletInstruction: string;
}

const ConnectWalletMetaMask = ({
	imgSrc,
	walletName,
	walletInstallUrl,
	walletInstruction,
}: Props) => {
	const isWalletInstalled = useSelector(selectIsMetaMaskInstalled);
	const displayWalletInstallUrl = !isWalletInstalled;
	console.log('isWalletInstalled', isWalletInstalled);

	const connectWallet = async (event: SyntheticEvent) => {
		if (isWalletInstalled) {
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
				const accounts = await provider.request({
					method: 'eth_requestAccounts',
				});

				console.log('Wallet Connected!');
				console.log(accounts);
				console.log(provider.selectedAddress);
			}
		}
	};

	return (
		<ConnectWalletBase
			imgSrc={imgSrc}
			walletName={walletName}
			connectWallet={connectWallet}
			walletInstallUrl={walletInstallUrl}
			walletInstruction={walletInstruction}
			displayWalletInstallUrl={displayWalletInstallUrl}
		/>
	);
};

export default ConnectWalletMetaMask;
