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

	login(username, password) {
		return axios
			.post(API_URL + "login", {
				username,
				password,
			})
			.then((response) => {
				if (response.data.accessToken) {
					localStorage.setItem("user", JSON.stringify(response.data));
					console.log(JSON.stringify(response.data));
				}
			});
	}

	logout() {
		localStorage.removeItem("user");
	}

	getCurrentUser() {
		return JSON.parse(localStorage.getItem("user"));
	}
}

export default new AccountService();
