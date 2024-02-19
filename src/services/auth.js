import createApiClient from "./api";

class AuthService {
  constructor(baseUrl = "/api/auth") {
    this.api = createApiClient(baseUrl);
  }

  async create(data) {
    return (await this.api.post("/register", data)).data;
  }

  async login(data) {
    return (await this.api.post("/login", data)).data;
  }

  async getLoggedInAccount(token) {
    return (
      await this.api.request({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
        url: import.meta.env.VITE_API_BASE_URL + "/api/auth/logged-in-account",
      })
    ).data;
  }
}

export default new AuthService();
