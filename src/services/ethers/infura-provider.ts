import { ethers } from 'ethers';
import infuraNetworks from '../../constants/infura-networks';

const chainId = process.env.REACT_APP_CHAIN_ID as string;
const network = infuraNetworks[chainId];

const infuraProvider = new ethers.providers.InfuraProvider(network, {
	projectId: process.env.REACT_APP_INFURA_PROJECT_ID,
	// projectSecret: process.env.REACT_APP_INFURA_PROJECT_SECRET,
});

export default infuraProvider;
