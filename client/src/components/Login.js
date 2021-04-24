import React, { Component } from "react";
import AccountService from "../services/account.service";

class Login extends Component {
	constructor(props) {
		super(props);
		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.state = {
			username: "",
			password: "",
			message: "",
		};
	}

	onChangeUsername(e) {
		this.setState({
			username: e.target.value,
		});
	}

	onChangePassword(e) {
		this.setState({
			password: e.target.value,
		});
	}

	handleLogin(e) {
		e.preventDefault();

		AccountService.login(this.state.username, this.state.password).then(
			() => {
				this.setState({
					message: "Looks like you've logged in successfully",
				});
			},
			(error) => {
				console.log(error);
				const responseMessage = error.message || error.toString();
				this.setState({
					message: responseMessage,
				});
			}
		);
	}

	render() {
		return (
			<div>
				<h2>LOGIN</h2>
				<form onSubmit={this.handleLogin}>
					<div>
						<label>Username</label>
						<input
							type='text'
							value={this.state.username}
							onChange={this.onChangeUsername}
						/>
					</div>
					<div>
						<label>Password</label>
						<input
							type='password'
							value={this.state.password}
							onChange={this.onChangePassword}
						/>
					</div>
					<button type='submit'>Submit</button>
				</form>
				<br />
				<h3>MESSAGE: {this.state.message}</h3>
			</div>
		);
	}
}

export default Login;
