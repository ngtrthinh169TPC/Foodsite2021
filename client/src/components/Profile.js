import React, { Component } from "react";
import { Redirect } from "react-router";
import AccountService from "../services/account.service";

class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			redirect: "",
			userReady: false,
			currentUser: { username: "" },
		};
	}

	componentDidMount() {
		const currentUser = AccountService.getCurrentUser();

		if (!currentUser) {
			this.setState({
				redirect: "/login",
			});
		} else {
			this.setState({
				userReady: true,
				currentUser: currentUser,
			});
		}
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />;
		}

		return (
			<div>
				<h2>PROFILE</h2>
				<h3>Current User: {this.state.currentUser.username}</h3>
				<h4>Id: {this.state.currentUser.id}</h4>
				<h4>Email: {this.state.currentUser.email}</h4>
				<h4>Authorities: </h4>
				<ul>
					{this.state.currentUser.roles &&
						this.state.currentUser.roles.map((role, index) => (
							<li key={index}>{role}</li>
						))}
				</ul>
			</div>
		);
	}
}

export default Profile;
