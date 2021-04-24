import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import AccountService from "../services/account.service";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.logOut = this.logOut.bind(this);
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
		} else {
			this.setState({
				currentUser: null,
			});
		}
	}

	logOut() {
		AccountService.logout();
		window.location.reload();
	}

	render() {
		const currentUser = this.state.currentUser;

		return (
			<nav className='navbar-main'>
				<div className='navbar-content'>
					<div className='navbar-logo'>
						{/* logo */}
						<Link to='/'>
							<img src='/images/LogoDatami.png' alt='Logo' />
						</Link>
					</div>
					<div className='navbar-logo-name'>DATAMI</div>
					<ul>
						{!currentUser && (
							<li>
								<Link to='/register'>Register</Link>
							</li>
						)}
						{!currentUser && (
							<li>
								<Link to='/login'>Login</Link>
							</li>
						)}
						{currentUser && (
							<li>
								<Link to='/profile'>Profile</Link>
							</li>
						)}
						{currentUser && (
							<li>
								<button type='button' onClick={this.logOut}>
									Logout:
								</button>
							</li>
						)}
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
