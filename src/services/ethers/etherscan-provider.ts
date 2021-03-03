import { ethers } from 'ethers';
import infuraNetworks from '../../constants/infura-networks';

const chainId = process.env.REACT_APP_CHAIN_ID as string;
const network = infuraNetworks[chainId];

const etherscanProvider = new ethers.providers.EtherscanProvider(
	network,
	process.env.REACT_APP_ETHERSCAN_API_KEY
);

export default etherscanProvider;
