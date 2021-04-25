import { Component } from "react";
import DataService from "../services/data.service";
import "../styles/Slider.css";

class Slider extends Component {
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
			(item) => item.productLine === this.props.productline
		);

		const exist = filtered.length === 0;

		return (
			<div className='slider-main'>
				{!exist && (
					<>
						<div className='slider-header'>
							<h2>{this.props.productline}</h2>
						</div>
						<ul>
							{filtered.map((item) => (
								<li key={item.productCode} className='slider-container'>
									<div className='slider-img-container'>
										<img
											src={`../products-image/${item.imageLink}`}
											alt={item.productName}
										/>
									</div>
									<h3>{item.productName}</h3>
									<h4>{item.price} đ</h4>
								</li>
							))}
						</ul>
					</>
				)}
			</div>
		);
	}
}

export default Slider;
