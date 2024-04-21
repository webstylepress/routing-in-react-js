import { NavLink } from 'react-router-dom';

function Footer() {
	return (
		<nav className='footer'>
			<ul>
				<li>
					<NavLink to='/' activeclassname='active'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/products' activeclassname='active'>
						Products
					</NavLink>
				</li>
				<li>
					<NavLink to='/about' activeclassname='active'>
						About
					</NavLink>
				</li>
				<li>
					<NavLink to='/contact' activeclassname='active'>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Footer;
