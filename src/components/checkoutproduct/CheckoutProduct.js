import React from 'react';
import { useStateValue } from '../../StateProvider';
import './CheckoutProduct.css';
const CheckoutProduct = ({ id, title, image, price, rating }) => {
	const [{ basket }, dispatch] = useStateValue();
	const removeFromBasket = () => {
		//to remove the item from the baskets
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id,
		});
	};
	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct_image" src={image} alt="" />
			<div className="checkoutProduct_info">
				<p className="checkoutProduct_title">{title}</p>
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
				<button onClick={removeFromBasket}>Remove from basket</button>
			</div>
		</div>
	);
};

export default CheckoutProduct;
