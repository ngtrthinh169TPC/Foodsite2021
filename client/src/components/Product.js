import { Component } from "react";
import "../styles/Product.css";

class Product extends Component {
	constructor(props) {
		super(props);
		this.addNumber = this.addNumber.bind(this);
		this.subtractNumber = this.subtractNumber.bind(this);
		this.addToCart = this.addToCart.bind(this);
		this.state = {
			product: {
				productName: "Should this been product name",
				productDescription:
					"This product is currently not found :(. This might be some problem of server, or url link, or your desire haven't been true. Sorry for this inconvenient",
				price: 0,
				imageLink: "default.jpg",
			},
			amount: 1,
		};
	}

	componentDidMount() {
		const temp = this.props.allProducts.find(
			(item) => item.productCode === this.props.match.params.value
		);

		if (temp) {
			this.setState({ ...this.state, product: temp });
		}
	}

	addNumber() {
		this.setState({
			...this.state,
			amount: this.state.amount + 1,
		});
	}

	subtractNumber() {
		this.setState({
			...this.state,
			amount: this.state.amount > 0 ? this.state.amount - 1 : this.state.amount,
		});
	}

	addToCart() {}

	render() {
		return (
			<div className='product-info-main'>
				<section>
					<div id='product-container1' className='product-container'>
						<div className='product-img-container'>
							<img
								src={`../products-image/${this.state.product.imageLink}`}
								alt={this.state.product.productName}
							/>
						</div>
					</div>
					<div id='product-container2' className='product-container'>
						<div className='product-info-detail'>
							<h1 id='product-info-name'>{this.state.product.productName}</h1>
							<h2 id='product-info-price'>
								{this.state.product.price} <span className='price-vnd'>đ</span>
							</h2>
							<p>{this.state.product.productDescription}</p>
						</div>
						<div className='product-order-bar'>
							<div className='product-order-label'>Số lượng:</div>
							<i
								className='fas fa-minus-circle'
								onClick={this.subtractNumber}
							/>
							<input
								className='product-amount-display'
								type='number'
								value={this.state.amount}
							/>
							<i class='fas fa-plus-circle' onClick={this.addNumber} />
							<button
								className='product-order-to-cart'
								onClick={this.addToCart}>
								Thêm vào giỏ hàng
							</button>
						</div>
					</div>
				</section>
				<section>Comments</section>
			</div>
		);
	}
}

export default Product;
