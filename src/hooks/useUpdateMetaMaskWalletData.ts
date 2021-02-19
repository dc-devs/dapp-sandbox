import { useDispatch } from 'react-redux';
import { updateMetaMaskWalletData } from '../redux/slices/metamask-slice';
import { useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

const useUpdateIsMetaMaskConnected = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const detectProvider = async () => {
			const provider: any = await detectEthereumProvider({
				silent: true,
				mustBeMetaMask: true,
			});

			const accounts = await provider.request({
				method: 'eth_requestAccounts',
			});

			const walletAddress = accounts[0];

			if (provider && provider.selectedAddress) {
				dispatch(
					updateMetaMaskWalletData({
						address: walletAddress,
					})
				);
			}
		};

		detectProvider();
	});
};

export default useUpdateIsMetaMaskConnected;
