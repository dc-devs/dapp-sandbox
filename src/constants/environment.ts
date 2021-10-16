interface ConfigData {
	serverBaseUrl: string;
}

interface Environment {
	development: ConfigData;
	production: ConfigData;
	[key: string]: ConfigData;
}

const environment: Environment = {
	test: {
		serverBaseUrl: 'http://10.97.227.3:3001',
	},
	development: {
		serverBaseUrl: 'http://10.97.227.3:3001',
	},
	production: {
		serverBaseUrl: 'http://10.97.227.3:3001',
	},
};

export default environment;
