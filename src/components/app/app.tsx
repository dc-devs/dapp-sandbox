import LayoutHome from './layout-home';
import LayoutApp from './layout-app';
import Home from '../pages/home';
import Dashboard from '../pages/dashboard';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { selectIsMetaMaskConnected } from '../../redux/slices/metamask-slice';
import {
	useUpdateIsMetaMaskInstalled,
	useUpdateIsMetaMaskConnected,
} from '../../hooks';
import { Route, Switch, useLocation } from 'react-router-dom';

const App = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const isMetaMaskConnected = useSelector(selectIsMetaMaskConnected);
	const location = useLocation();

	useUpdateIsMetaMaskInstalled();
	useUpdateIsMetaMaskConnected();

	console.log(location);
	console.log('isMetaMaskConnected', isMetaMaskConnected);

	const redirectComponent = isMetaMaskConnected ? (
		<Redirect to="/dashboard" />
	) : (
		<Redirect to="/" />
	);

	return (
		<>
			{redirectComponent}
			<Switch>
				<Route path="/dashboard">
					<LayoutApp>
						<Dashboard />
					</LayoutApp>
				</Route>
				<Route path="/">
					<LayoutHome>
						<Home />
					</LayoutHome>
				</Route>
			</Switch>
		</>
	);
};

export default App;
