import { useEffect } from 'react';
import Home from '../pages/home';
import { Redirect } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import Dashboard from '../pages/dashboard';
import LayoutApp from '../layouts/layout-app';
import LayoutHome from '../layouts/layout-home';
import { Route, Switch } from 'react-router-dom';
import { selectIsMetaMaskConnected } from '../../redux/slices/metamask-connected-slice';
import {
	selectIsMetaMaskInstalled,
	fetchIsMetaMaskInstalled,
} from '../../redux/slices/metamask-installed-slice';

const App = () => {
	const dispatch = useDispatch();
	const isMetaMaskInstalled = useSelector(selectIsMetaMaskInstalled);
	const isMetaMaskConnected = useSelector(selectIsMetaMaskConnected);
	console.log('isMetaMaskInstalled', isMetaMaskInstalled);
	console.log('isMetaMaskConnected', isMetaMaskConnected);

	useEffect(() => {
		if (!isMetaMaskInstalled) {
			dispatch(fetchIsMetaMaskInstalled());
		}
	}, [isMetaMaskInstalled, dispatch]);

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
