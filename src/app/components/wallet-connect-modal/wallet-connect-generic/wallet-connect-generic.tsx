import { SyntheticEvent } from 'react';
import WalletConnectBase from '../wallet-connect-base';

interface Props {
	imgSrc: string;
	walletName: string;
	walletInstallUrl?: string;
	walletInstruction: string;
}

const WalletConnectGeneric = ({
	imgSrc,
	walletName,
	walletInstallUrl,
	walletInstruction,
}: Props) => {
	const displayWalletInstallUrl = false;

	const connectWallet = async (event: SyntheticEvent) => {
		event.preventDefault();
		event.stopPropagation();
	};

	return (
		<WalletConnectBase
			imgSrc={imgSrc}
			walletName={walletName}
			connectWallet={connectWallet}
			walletInstallUrl={walletInstallUrl}
			walletInstruction={walletInstruction}
			displayWalletInstallUrl={displayWalletInstallUrl}
		/>
	);
};

export default WalletConnectGeneric;
