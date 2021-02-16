import { useDispatch } from 'react-redux';
import { updateIsInstalled } from '../redux/slices/metamask-slice';
import { useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

const useUpdateIsMetaMaskInstalled = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const detectProvider = async () => {
			const provider: any = await detectEthereumProvider({
				mustBeMetaMask: true,
			});

			if (provider) {
				dispatch(updateIsInstalled(true));
			}
		};

		detectProvider();
	});
};

export default useUpdateIsMetaMaskInstalled;
