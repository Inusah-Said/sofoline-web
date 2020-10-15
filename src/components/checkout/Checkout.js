import React from 'react';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../checkoutproduct/CheckoutProduct';

const Checkout = () => {
	const [{ basket }, dispatch] = useStateValue();
	return (
		<div className="checkout">
			<img
				className="checkout_ad"
				src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
				alt="ad banner"
			/>
			{basket?.length === 0 ? (
				<div>
					<h1 className="checkout_title">Your shopping basket is empty</h1>
					<p>
						You have no items in your basket. To buy one item or more, click "
						Add to basket" next to the item
					</p>
				</div>
			) : (
				<div>
					<h1>Your shopping basket</h1>
					{basket?.map((item) => (
						<CheckoutProduct
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Checkout;
