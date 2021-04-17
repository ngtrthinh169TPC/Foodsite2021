import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./styles.css";

class Navbar extends Component {
	render() {
		return (
			<nav>
				<div className='nav-main'>
					<div class='nav-header'>
						{/* <img src='./logo.svg' class='logo' alt='logo' /> */}
						<button class='nav-toggle'>
							<i class='fas fa-bars'></i>
						</button>
					</div>
					<ul class='links'>
						<li>
							<Link to='/Home'>Home</Link>
							{/* <a href='index.html'>home</a> */}
						</li>
						<li>
							<a href='about.html'>about</a>
						</li>
						<li>
							<a href='projects.html'>projects</a>
						</li>
						<li>
							<a href='contact.html'>contact</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
