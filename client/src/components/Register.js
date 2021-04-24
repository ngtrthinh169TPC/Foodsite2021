import React, { Component } from "react";
import AccountService from "../services/account.service";

class Register extends Component {
	constructor(props) {
		super(props);
		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.handleRegister = this.handleRegister.bind(this);
		this.state = {
			username: "",
			email: "",
			password: "",
			roles: [],
			message: "",
		};
	}

	onChangeUsername(e) {
		this.setState({
			username: e.target.value,
		});
	}

	onChangeEmail(e) {
		this.setState({
			email: e.target.value,
		});
	}

	onChangePassword(e) {
		this.setState({
			password: e.target.value,
		});
	}

	handleRegister(e) {
		e.preventDefault();

		AccountService.register(
			this.state.username,
			this.state.email,
			this.state.password
		).then(
			(response) => {
				this.setState({
					message: response.data.message,
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
				<h2>REGISTER</h2>
				<form onSubmit={this.handleRegister}>
					<div>
						<label>Username</label>
						<input
							type='text'
							value={this.state.username}
							onChange={this.onChangeUsername}
						/>
					</div>
					<div>
						<label>Email</label>
						<input
							type='text'
							value={this.state.email}
							onChange={this.onChangeEmail}
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
				<h3>{this.state.message}</h3>
			</div>
		);
	}
}

export default Register;
