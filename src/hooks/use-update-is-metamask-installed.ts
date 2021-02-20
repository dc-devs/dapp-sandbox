import { useDispatch } from 'react-redux';
import { updateIsMetaMaskInstalled } from '../redux/slices/metamask-slice';
import { useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

const useUpdateIsMetaMaskInstalled = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const detectProvider = async () => {
			const provider: any = await detectEthereumProvider({
				silent: true,
				mustBeMetaMask: true,
			});

			if (provider) {
				dispatch(updateIsMetaMaskInstalled(true));
			}
		};

		detectProvider();
	});
};

export default useUpdateIsMetaMaskInstalled;
