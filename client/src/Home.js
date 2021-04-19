import React, { Component } from "react";
import axios from "axios";

// const imgcode = "karaage-test.jpg";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product: [],
		};
	}

	componentDidMount() {
		axios
			.get("/api/products")
			.then((res) => {
				const product = res.data;
				this.setState({ product: product.product });
			})
			.catch((error) => console.log(error));
	}

	render() {
		return (
			<div>
				<h2>Here's some demo data</h2>
				<ul>
					{this.state.product.map((item) => (
						<li key={item.id}>
							<h3>{item.productName}</h3>
							<div>{item.productDescription}</div>
							<h4>{item.price}</h4>
							<img src={`products-image/${item.imageLink}`} alt='' />
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Home;
