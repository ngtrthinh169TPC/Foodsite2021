import axios from "axios";

const API_URL = "http://localhost:4000/api/account/";

class AccountService {
	register(username, email, password) {
		return axios.post(API_URL + "register", {
			username,
			email,
			password,
		});
	}
}

export default new AccountService();
