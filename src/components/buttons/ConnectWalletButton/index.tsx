import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import { SyntheticEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

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

	const handleOnClick = async (event: SyntheticEvent) => {
		event.preventDefault();
		event.stopPropagation();
		const ethereum = window.ethereum;

		if (ethereum) {
			// const { provider } = new ethers.providers.Web3Provider(ethereum);
			// const accounts = await provider.request({
			// 	method: 'eth_requestAccounts',
			// });
			// console.log(accounts);
		}
	};

	// const isMetaMaskInstalled = async () => {
	// 	return await detectEthereumProvider({
	// 		mustBeMetaMask: true,
	// 		silent: true,
	// 	});
	// };

	return (
		<>
			<div className={classes.walletContainer} onClick={handleOnClick}>
				<img
					className={classes.walletImage}
					src={imgSrc}
					alt={walletName}
				/>
				<div className={classes.walletName}>{walletName}</div>
				<div className={classes.walletInstruction}>
					{walletInstruction}
				</div>
			</div>
		</>
	);
};

export default ConnectWalletButton;
