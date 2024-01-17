import createApiClient from './api';

class AuthService {
	constructor(baseUrl = '/api/auth') {
		this.api = createApiClient(baseUrl);
	}

	// register
	async create(data) {
		return (await this.api.post('/register', data)).data;
	}

	

}

export default new AuthService();