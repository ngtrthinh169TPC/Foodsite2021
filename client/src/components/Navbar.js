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
			<nav className='header-main'>
				<div className='header-content'>
					<div className='header-logo'>
						{/* logo */}
						<Link to='/'>
							<img src='/images/LogoDatami.png' alt='Logo' />
						</Link>
						<Link to='/'>
							<div className='header-logo-name'>DATAMI</div>
						</Link>
					</div>
					<ul className='header-log-container'>
						<div className='header-log-button'>
							<i className='fas fa-shopping-cart' />
						</div>
						{currentUser ? (
							<div className='header-log-button'>
								<li>
									<Link to='/profile'>
										<i className='fas fa-user' />
									</Link>
								</li>
								<li>
									<i className='fas fa-sign-out-alt' onClick={this.logOut} />
								</li>
							</div>
						) : (
							<div className='header-log-button'>
								<li>
									<Link to='/register'>
										<i className='fas fa-user-plus' />
									</Link>
								</li>
								<li>
									<Link to='/login'>
										<i className='fas fa-sign-in-alt' />
									</Link>
								</li>
							</div>
						)}
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
