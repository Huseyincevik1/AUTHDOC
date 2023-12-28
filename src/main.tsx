import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from '../src/pages/Home/Home.jsx';
import ErrorPage from '../src/navigators/ErrorPage.jsx';
import School from '../src/pages/School/School.jsx';
import Employer from '../src/pages/Employer/Employer.jsx';
import Student from '../src/pages/Student/Student.jsx';
import { ThemeProvider } from './components/theme-provider.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'school',
				element: <School />,
			},
			{
				path: 'employer',
				element: <Employer />,
			},
			{
				path: 'student',
				element: <Student />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);
