import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import AccountService from "./services/account.service";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: "",
		};
	}

	componentDidMount() {
		const user = AccountService.getCurrentUser();

		if (user) {
			this.setState({
				currentUser: user,
			});
		}
	}

	render() {
		return (
			<div>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Test} />
					<Route path='/register' component={Register} />
					<Route path='/login' component={Login} />
					<Route path='/profile' component={Profile} />
				</Switch>
			</div>
		);
	}
}

export default App;
