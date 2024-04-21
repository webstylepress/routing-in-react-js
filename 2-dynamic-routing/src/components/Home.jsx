import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Home() {
	return (
		<>
			<Helmet>
				<title>Home</title>
				<meta name='description' content='This is homepage' />
			</Helmet>
			<h1>Home</h1>
			<hr />
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium,
				velit sit? Quis, quos? Vel perferendis odio molestias placeat delectus
				adipisci, earum facere deleniti laborum maxime laboriosam eaque, velit
				sapiente nihil.
			</p>
			<p>
				Simple Links: <Link to='/'>Home</Link>, <Link to='/about'>About</Link>,
				<Link to='/contact'>Contact</Link>
			</p>
		</>
	);
}
