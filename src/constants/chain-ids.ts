interface ChainIds {
	'1': string;
	'3': string;
	'4': string;
	'5': string;
	'42': string;
	MAINNET: number;
	ROPSTEN: number;
	RINKEBY: number;
	GORLI: number;
	KOVAN: number;
	[key: string]: string | number;
}

const chainIds = {
	'1': 'MAINNET',
	'3': 'ROPSTEN',
	'4': 'RINKEBY',
	'5': 'GÖRLI',
	'42': 'KOVAN',
	MAINNET: 1,
	ROPSTEN: 3,
	RINKEBY: 4,
	GORLI: 5,
	KOVAN: 42,
} as ChainIds;

export default chainIds;
