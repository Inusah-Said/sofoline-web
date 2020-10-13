/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './Products.css';
import { useStateValue } from '../../StateProvider';
function Products({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();
	const addToBasket = () => {
		// add item to basket ..
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id,
				title,
				image,
				rating,
			},
		});
	};
	return (
		<div className="product">
			<div className="product_info">
				<p>{title}</p>
				<p className="product_price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product_rating">
					{Array(rating)
						.fill()
						.map((_) => (
							<span role="img" key={rating}>
								⭐{' '}
							</span>
						))}
				</div>
			</div>
			<img src={image} alt="product" />
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Products;
