import detectEthereumProvider from '@metamask/detect-provider';

const getMetaMaskWallet = async () => {
	const provider: any = await detectEthereumProvider({
		silent: true,
		mustBeMetaMask: true,
	});

	const isInstalled = !!provider;

	const isConnected = isInstalled && !!provider.selectedAddress;

	if (isConnected) {
		await provider.request({
			method: 'eth_requestAccounts',
		});
	}

	return {
		isInstalled,
		isConnected,
		selectedAddress: provider.selectedAddress,
	};
};

export default getMetaMaskWallet;
