import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import { SyntheticEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { selectIsMetaMaskInstalled } from '../../../../../redux/slices/metamask-slice';

const useStyles = makeStyles((theme) => ({
	walletContainer: {
		width: '400px',
		height: '150px',
		cursor: 'pointer',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: '12px',
		boxShadow: theme.shadows['3'],
		margin: theme.spacing(2),
		transition: 'all 0.2s ease-in-out',
		'&:hover': {
			boxShadow: theme.shadows['5'],
			backgroundColor: '#eceff1',
		},
	},
	walletImage: {
		width: '45px',
		height: '45px',
	},
	walletName: {
		fontSize: '1.3rem',
		fontWeight: 'bold',
		marginTop: '10px',
	},
	walletInstruction: {
		marginTop: '2px',
	},
	metaMaskInstallLink: {
		textDecoration: 'none',
	},
}));

interface Props {
	imgSrc: string;
	walletName: string;
	walletInstruction: string;
}

const ConnectWalletButton = ({
	imgSrc,
	walletName,
	walletInstruction,
}: Props) => {
	const classes = useStyles();
	const isMetaMaskInstalled = useSelector(selectIsMetaMaskInstalled);

	const handleOnClick = async (event: SyntheticEvent) => {
		if (isMetaMaskInstalled) {
			event.preventDefault();
			event.stopPropagation();
		}
		const ethereum = window.ethereum;

		if (ethereum) {
			const metaMaskProvider: any = await detectEthereumProvider({
				mustBeMetaMask: true,
				silent: true,
			});

			if (metaMaskProvider) {
				const { provider } = new ethers.providers.Web3Provider(
					ethereum
				) as any;
				const accounts = await provider.request({
					method: 'eth_requestAccounts',
				});
				console.log(accounts);
			}
		}
	};

	const MetaMaskInstallHTML = (
		<a
			href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
			target="_blank"
			rel="noreferrer"
			className={classes.metaMaskInstallLink}
		>
			<Typography color="primary">Click to install MetaMask</Typography>
		</a>
	);

	const WalletInstructionHTML = (
		<Typography className={classes.walletInstruction}>
			{walletInstruction}
		</Typography>
	);

	const instruction =
		walletName === 'MetaMask' && !isMetaMaskInstalled
			? MetaMaskInstallHTML
			: WalletInstructionHTML;

	return (
		<>
			<div className={classes.walletContainer} onClick={handleOnClick}>
				<img
					className={classes.walletImage}
					src={imgSrc}
					alt={walletName}
				/>

				<Typography className={classes.walletName}>
					{walletName}
				</Typography>

				{instruction}
			</div>
		</>
	);
};

export default ConnectWalletButton;
