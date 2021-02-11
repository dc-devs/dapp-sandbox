import { useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

const useIsMetaMaskInstalled = () => {
	useEffect(() => {
		const detectProvider = async () => {
			const provider = await detectEthereumProvider();

			if (provider) {
				console.log('MetaMask Installed!!');
			} else {
				console.log('Please install MetaMask!');
			}
		};

		detectProvider();
	});
};

export default useIsMetaMaskInstalled;
