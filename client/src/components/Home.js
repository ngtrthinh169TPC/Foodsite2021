import { Component } from "react";
import "../styles/Home.css";
import Carousel from "./Carousel";
import Tab from "./Tab";

import DataService from "../services/data.service";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allProducts: [],
			productlines: [],
		};
	}

	componentDidMount() {
		DataService.getProducts()
			.then((res) => {
				this.setState({ allProducts: res.data.products });
			})
			.catch((error) => console.log(error));

		DataService.getProductlines()
			.then((res) => {
				this.setState({
					productlines: res.data.productlines,
				});
			})
			.catch((error) => console.log(error));
	}

	render() {
		return (
			<div className='homepage'>
				<section>
					<div id='home-tab'>
						<Tab productlines={this.state.productlines} />
					</div>
					<div id='home-container1' className='home-banner'>
						<img src='../images/banner1.jpg' alt='banner1' />
					</div>
					<div id='home-container2'>
						<div className='home-container-halfsize home-banner'>
							<img
								id='cut-for-margin'
								src='../images/banner2.jpg'
								alt='banner2'
							/>
						</div>
						<div className='home-container-halfsize home-banner'>
							<img src='../images/banner3.jpg' alt='banner3' />
						</div>
					</div>
				</section>
				<section>
					<div id='home-container4' className='home-banner'>
						<img src='../images/banner4.jpg' alt='banner4' />
					</div>
				</section>
				<>
					{this.state.productlines.map((item) => (
						<section key={item.productLine}>
							<Carousel
								allProducts={this.state.allProducts}
								productline={item.productLine}
							/>
						</section>
					))}
				</>
			</div>
		);
	}
}

export default Home;
