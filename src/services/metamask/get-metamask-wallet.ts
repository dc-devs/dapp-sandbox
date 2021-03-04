import detectEthereumProvider from '@metamask/detect-provider';

interface MetaMaskWallet {
	selectedAddress: string;
}

const getMetaMaskWallet = async () => {
	const wallet = {} as MetaMaskWallet;

	const provider: any = await detectEthereumProvider({
		silent: true,
		mustBeMetaMask: true,
	});

	if (provider && provider.selectedAddress) {
		await provider.request({
			method: 'eth_requestAccounts',
		});

		wallet.selectedAddress = provider.selectedAddress;
	}

	return wallet;
};

export default getMetaMaskWallet;
