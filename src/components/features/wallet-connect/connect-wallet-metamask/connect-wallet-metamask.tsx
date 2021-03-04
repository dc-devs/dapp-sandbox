import { ethers } from 'ethers';
import { useDispatch } from 'react-redux';
// import store from '../../../../redux/store';
import detectEthereumProvider from '@metamask/detect-provider';
import { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { updateMetaMaskWallet } from '../../../../redux/slices/metamask-slice';
import { updateIsMetaMaskConnected } from '../../../../redux/slices/metamask-connected-slice';
import { selectIsMetaMaskInstalled } from '../../../../redux/slices/metamask-installed-slice';
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
	const dispatch = useDispatch();
	const isWalletInstalled = useSelector(selectIsMetaMaskInstalled);
	const displayWalletInstallUrl = !isWalletInstalled;
	console.log('connectWallet - isWalletInstalled', isWalletInstalled);

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

				await provider.request({
					method: 'eth_requestAccounts',
				});

				dispatch(
					updateMetaMaskWallet({
						selectedAddress: provider.selectedAddress,
					})
				);

				dispatch(updateIsMetaMaskConnected(true));
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
