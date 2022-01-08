/* eslint-disable @typescript-eslint/no-unused-vars */
import detectEthereumProvider from '@metamask/detect-provider';

interface Permission {
	date: number;
	id: string;
	invoker: string;
	parentCapability: string;
}

const getMetaMaskWallet = async () => {
	let isInstalled = false;
	let isConnected = false;
	let selectedAddress = '';

	const provider: any = await detectEthereumProvider({
		silent: true,
		mustBeMetaMask: true,
	});

	isInstalled = !!provider;

	const permissions: Permission[] = await provider.request({
		method: 'wallet_getPermissions',
	});

	isConnected = permissions[0]?.parentCapability === 'eth_accounts';

	if (isConnected) {
		const accounts: string[] = await provider.request({
			method: 'eth_requestAccounts',
		});

		selectedAddress = accounts[0] || '';
	}

	return {
		isInstalled,
		isConnected,
		selectedAddress,
	};
};

export default getMetaMaskWallet;
