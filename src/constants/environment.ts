interface ConfigData {
	serverBaseUrl: string;
}

interface Environment {
	development: ConfigData;
	production: ConfigData;
	[key: string]: ConfigData;
}

const environment: Environment = {
	development: {
		serverBaseUrl: 'http://localhost:3001',
	},
	production: {
		serverBaseUrl: 'http://localhost:3001',
	},
};

export default environment;
