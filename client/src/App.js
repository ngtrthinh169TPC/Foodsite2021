import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Test from "./components/Test";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Home from "./components/Home";

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Switch>
					<Route exact path={["/", "/home"]} component={Home} />
					<Route path='/register' component={Register} />
					<Route path='/login' component={Login} />
					<Route path='/profile' component={Profile} />
				</Switch>
			</div>
		);
	}
}

export default App;
