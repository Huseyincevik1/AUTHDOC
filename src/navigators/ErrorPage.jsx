import { Link } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';
import { Button } from '../components/ui/button';

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div
			id='error-page'
			className='h-screen flex flex-col gap-5 items-center justify-center'
		>
			<h1 className='text-5xl font-bold'>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
			<Button variant='outline'>
				<Link to='/'>Go back home</Link>
			</Button>
		</div>
	);
}
