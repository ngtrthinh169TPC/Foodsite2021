import React, { Component } from "react";
import "../styles/Test.css";
import DataService from "../services/data.service";

class Test extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
		};
	}

	componentDidMount() {
		DataService.getProducts()
			.then((res) => {
				this.setState({ products: res.data.products });
			})
			.catch((error) => console.log(error));
	}

	render() {
		const filtered = this.state.products.filter(
			(item) => item.productLine === "Bánh tráng"
		);

		return (
			<div className='container'>
				<ul>
					{filtered.map((item, index) => (
						<li key={index} className='slide'>
							<img
								src={`../products-image/${item.imageLink}`}
								alt={item.productName}
							/>
							<h2>{item.productName}</h2>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Test;
