import { useDispatch } from 'react-redux';
import { updateIsMetaMaskConnected } from '../redux/slices/metamask-slice';
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

			if (provider && provider.selectedAddress) {
				dispatch(updateIsMetaMaskConnected(true));
			}
		};

		detectProvider();
	});
};

export default useUpdateIsMetaMaskConnected;
