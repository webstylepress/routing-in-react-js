import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<>
			<Helmet>
				<title>404</title>
				<meta name='description' content='Page not found' />
			</Helmet>
			<h1>404 - Not Found</h1>
			<hr />
			<p>Sorry, the page you are looking for does not exist.</p>
			<p>
				<Link to='/products'>Back</Link>
			</p>
		</>
	);
}

export default NotFound;
