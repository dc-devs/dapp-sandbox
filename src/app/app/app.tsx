import { useEffect } from 'react';
import AppHome from '../screens/app-home';
import { Redirect } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import Dashboard from '../screens/dashboard';
import LayoutApp from '../layouts/layout-app';
import LayoutAppHome from '../layouts/layout-app-home';
import { Route, Switch } from 'react-router-dom';
import {
	fetchMetaMaskWallet,
	selectMetaMaskWallet,
} from '../../redux/slices/metamask-slice';
import {
	selectIsMetaMaskConnected,
	fetchIsMetaMaskConnected,
} from '../../redux/slices/metamask-connected-slice';
import {
	selectIsMetaMaskInstalled,
	fetchIsMetaMaskInstalled,
} from '../../redux/slices/metamask-installed-slice';

const App = () => {
	const dispatch = useDispatch();
	const metaMaskWallet = useSelector(selectMetaMaskWallet);
	const isMetaMaskInstalled = useSelector(selectIsMetaMaskInstalled);
	const isMetaMaskConnected = useSelector(selectIsMetaMaskConnected);

	console.log('App - metaMaskWallet', metaMaskWallet);
	console.log('App - isMetaMaskInstalled', isMetaMaskInstalled);
	console.log('App - isMetaMaskConnected', isMetaMaskConnected);

	useEffect(() => {
		if (!isMetaMaskInstalled) {
			dispatch(fetchIsMetaMaskInstalled());
		}

		if (isMetaMaskInstalled && !isMetaMaskConnected) {
			dispatch(fetchIsMetaMaskConnected());
		}

		if (isMetaMaskConnected) {
			dispatch(fetchMetaMaskWallet());
		}
	}, [isMetaMaskInstalled, isMetaMaskConnected, dispatch]);

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
					<LayoutAppHome>
						<AppHome />
					</LayoutAppHome>
				</Route>
			</Switch>
		</>
	);
};

export default App;
