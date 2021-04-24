import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
	render() {
		return (
			<nav>
				<h3>NAVBAR</h3>;
				<div>
					<div>
						{/* logo */}
						{/* <img src='' alt='' /> */}
					</div>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/register'>Register</Link>
						</li>
						<li>
							<Link to='/login'>Login</Link>
						</li>
						<li>
							<Link to='/profile'>Profile</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
