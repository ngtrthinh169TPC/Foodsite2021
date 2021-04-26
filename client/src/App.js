import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar";
import Test from "./components/Test";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Product from "./components/Product";

import DataService from "./services/data.service";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allProducts: [],
			productlines: [],
			cart: [],
		};
	}

	componentDidMount() {
		DataService.getProducts()
			.then((res) => {
				this.setState({ allProducts: res.data.products });
			})
			.catch((error) => console.log(error));

		DataService.getProductlines()
			.then((res) => {
				this.setState({
					productlines: res.data.productlines,
				});
			})
			.catch((error) => console.log(error));
	}

	render() {
		return (
			<div>
				<Navbar />
				<Switch>
					<Route exact path={["/", "/home"]} component={Home} />
					<Route path='/register' component={Register} />
					<Route path='/login' component={Login} />
					<Route path='/profile' component={Profile} />
					<Route path='/cart' component={Cart} />
					<Route
						path='/product/:value'
						render={(props) => (
							<Product {...props} allProducts={this.state.allProducts} />
						)}
					/>
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
