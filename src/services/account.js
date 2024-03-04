import createApiClient from "./api";

class AccountService {
  constructor() {
    this.api = createApiClient("/api/accounts", { needAuth: true });
  }

  async updateInfo(updatedInfo) {
    return (await this.api.put("", updatedInfo)).data;
  }
}

export default new AccountService();
