import { useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

const useIsMetaMaskInstalled = () => {
	useEffect(() => {
		const detectProvider = async () => {
			const provider: any = await detectEthereumProvider();

			if (provider) {
				provider
					.request({ method: 'eth_requestAccounts' })
					.then((accounts: any) => {
						console.log(accounts);
					})
					.catch((err: any) => {
						if (err.code === 4001) {
							// EIP-1193 userRejectedRequest error
							// If this happens, the user rejected the connection request.
							console.log('Please connect to MetaMask.');
						} else {
							console.error(err);
						}
					});
			} else {
				console.log('Please install MetaMask!');
			}
		};

		detectProvider();
	});
};

export default useIsMetaMaskInstalled;
