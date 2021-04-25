import React, { Component } from "react";
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
		return (
			<div>
				<h2>DEMO</h2>
				<ul>
					{this.state.products.map((item) => (
						<li key={item.id}>
							<h3>{item.productName}</h3>
							<h4>{item.productDescription}</h4>
							<img
								src={`../products-image/${item.imageLink}`}
								alt={item.productName}
							/>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Test;
