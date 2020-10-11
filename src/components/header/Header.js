import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
const Header = () => {
	return (
		<nav className="header">
			<Link to="/">
				<img
					className="header_logo"
					src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="amazon"
				/>
			</Link>
			<div className="header_search">
				<input type="text" className="header_searchInput" />
				<SearchIcon className="header_searchIcon" />
			</div>

			<div className="header_nav">
				<Link className="header_link" to="/login">
					<div className="header_option">
						<span className="header_optionLineOne">Hello Said</span>
						<span className="header_optionLineTwo">Sign In</span>
					</div>
				</Link>
				<Link className="header_link" to="/">
					<div className="header_option">
						<span className="header_optionLineOne">Returns</span>
						<span className="header_optionLineTwo">&orders</span>
					</div>
				</Link>
				<Link className="header_link" to="/">
					<div className="header_option">
						<span className="header_optionLineOne">Your</span>
						<span className="header_optionLineTwo">Prime</span>
					</div>
				</Link>
				<Link to="/checkout" className="header_link">
					<div className="header_optionBasket">
						<ShoppingBasketIcon />
						<span className="header_optionLineTwo header_basketCount">0</span>
					</div>
				</Link>
			</div>
		</nav>
	);
};

export default Header;
