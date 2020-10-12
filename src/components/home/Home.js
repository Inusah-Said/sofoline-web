import React from 'react';
import './Home.css';
import Products from '../products/Products';
const Home = () => {
	return (
		<div>
			<img
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt="prduct banner"
				className="home_image"
			/>
			<div className="home_row">
				<Products
					id={1234556}
					title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
					rating={4}
					price={10}
					image="https://images-eu.ssl-images-amazon.com/images/I/71nd%2Baoqy3L._AC_UL160_.jpg"
				/>
				<Products
					id={1234556}
					title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
					rating={4}
					price={10}
					image="https://images-eu.ssl-images-amazon.com/images/I/71nd%2Baoqy3L._AC_UL160_.jpg"
				/>
			</div>
			<div className="home_row">
				<Products
					id={1234556}
					title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
					rating={4}
					price={10}
					image="https://images-eu.ssl-images-amazon.com/images/I/71nd%2Baoqy3L._AC_UL160_.jpg"
				/>{' '}
				<Products
					id={1234556}
					title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
					rating={4}
					price={10}
					image="https://images-eu.ssl-images-amazon.com/images/I/71nd%2Baoqy3L._AC_UL160_.jpg"
				/>
				<Products
					id={1234556}
					title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
					rating={4}
					price={10}
					image="https://images-eu.ssl-images-amazon.com/images/I/71nd%2Baoqy3L._AC_UL160_.jpg"
				/>
			</div>
			<div className="home_row">
				{' '}
				<Products
					id={1234556}
					title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
					rating={4}
					price={10}
					image="https://images-eu.ssl-images-amazon.com/images/I/71nd%2Baoqy3L._AC_UL160_.jpg"
				/>
			</div>
		</div>
	);
};

export default Home;
