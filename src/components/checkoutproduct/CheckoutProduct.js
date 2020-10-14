import React from 'react';

const CheckoutProduct = ({ id, title, image, price, rating }) => {
	return (
		<div name="checkoutProduct">
			<img src={image} alt="" />
			<div className="checkoutProduct_info">
				<p>{title}</p>
				<p className="checkoutProduct_price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checoutProduct_rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<span role="img">⭐ </span>
						))}
				</div>
			</div>
		</div>
	);
};

export default CheckoutProduct;
