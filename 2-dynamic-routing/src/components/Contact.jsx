import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Contact() {
	return (
		<>
			<Helmet>
				<title>Contact</title>
				<meta name='description' content='This is contact page' />
			</Helmet>
			<h1>Contact</h1>
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
