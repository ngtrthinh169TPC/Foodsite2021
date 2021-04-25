import { Component } from "react";
import "../styles/Tab.css";

class Tab extends Component {
	render() {
		return (
			<aside className='tab-main' onFocus={this.toggleSidebar}>
				<div className='tab-header'>
					<p>
						<span>
							<i className='fas fa-bars' />
						</span>
						Danh mục sản phẩm
					</p>
				</div>
				<ul className='tab-line-list'>
					{this.props.productlines.map((item) => (
						<li key={item.productLine}>
							<i className='fas fa-chevron-right' />
							{item.productLine}
						</li>
					))}
				</ul>
			</aside>
		);
	}
}

export default Tab;
