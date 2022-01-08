import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';
import numeral from 'numeral';

interface Permission {
	date: number;
	id: string;
	invoker: string;
	parentCapability: string;
}

interface Props {
	requestPermission?: boolean;
}

const getMetaMaskWallet = async ({ requestPermission }: Props) => {
	let isInstalled = false;
	let isConnected = false;
	let selectedAddress = '';
	let balance = '';

	const provider: any = await detectEthereumProvider({
		silent: true,
		mustBeMetaMask: true,
	});

	isInstalled = !!provider;

	if (isInstalled && requestPermission) {
		await provider.request({
			method: 'eth_requestAccounts',
		});
	}

	const permissions: Permission[] = await provider.request({
		method: 'wallet_getPermissions',
	});

	isConnected = permissions[0]?.parentCapability === 'eth_accounts';

	if (isConnected) {
		const accounts: string[] = await provider.request({
			method: 'eth_accounts',
		});

		selectedAddress = accounts[0] || '';

		if (selectedAddress) {
			const balanceHex = await provider.request({
				method: 'eth_getBalance',
				params: [selectedAddress, 'latest'],
			});

			balance = ethers.BigNumber.from(balanceHex).toString();
			balance = ethers.utils.formatEther(balance);
			balance = numeral(balance).format('0,0.0000');
		}
	}

	return {
		isInstalled,
		isConnected,
		selectedAddress,
		balance,
	};
};

export default getMetaMaskWallet;
