import axios from "axios";

const API_URL = "http://localhost:4000/api/";

class DataService {
	getProducts() {
		return axios.get(API_URL + "data/products");
	}

	getProductlines() {
		return axios.get(API_URL + "data/productlines");
	}
}

export default new DataService();
