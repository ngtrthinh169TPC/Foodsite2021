import { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Carousel.css";

class Carousel extends Component {
	render() {
		const filtered = this.props.allProducts.filter(
			(item) => item.productLine === this.props.productline
		);

		const exist = filtered.length === 0;

		return (
			<div className='carousel-main'>
				{!exist && (
					<>
						<div className='carousel-header'>
							<h2>{this.props.productline}</h2>
						</div>
						<ul className='carousel-body'>
							{filtered.map((item) => (
								<Link
									to={`/product/${item.productCode}`}
									key={item.productCode}>
									<li className='carousel-container'>
										<div className='carousel-img-container'>
											<img
												src={`../products-image/${item.imageLink}`}
												alt={item.productName}
											/>
										</div>
										<h3>{item.productName}</h3>
										<h4>
											{item.price} <span>đ</span>
										</h4>
									</li>
								</Link>
							))}
						</ul>
					</>
				)}
			</div>
		);
	}
}

export default Carousel;
