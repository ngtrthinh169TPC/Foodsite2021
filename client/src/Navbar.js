import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./Navbar.css";
import "./styles.css";
import Home from "./Home";
import Login from "./Login";
import About from "./About";

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav>
					<div className='nav-main'>
						<div className='nav-header'>
							{/* <img src='./logo.svg' class='logo' alt='logo' /> */}
							<button className='nav-toggle'>
								<i className='fas fa-bars'></i>
							</button>
						</div>
						<ul className='links'>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/Login'>Login</Link>
							</li>
							<li>
								<Link to='/About'>About</Link>
							</li>
							<li>
								<a href='contact.html'>contact</a>
							</li>
						</ul>
					</div>
				</nav>
				<Route exact path='/' component={Home}></Route>
				<Route exact path='/Login' component={Login}></Route>
				<Route exact path='/About' component={About}></Route>
			</div>
		);
	}
}

export default Navbar;
