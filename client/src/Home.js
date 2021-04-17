import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			news: [],
		};
	}

	componentDidMount() {
		axios
			.get("/api/products")
			.then((res) => {
				const news = res.data;
				this.setState({ news: news.news });
			})
			.catch((error) => console.log(error));
	}

	render() {
		return (
			<div>
				<h1>Here's some demo data</h1>
				<ul>
					{this.state.news.map((item) => (
						<li key={item.id}>
							<h2>{item.productName}</h2>
							<div>{item.productDescription}</div>
							<h4>{item.price}</h4>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Home;
