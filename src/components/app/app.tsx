import { useEffect } from 'react';
import Home from '../pages/home';
import { Redirect } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import Dashboard from '../pages/dashboard';
import LayoutApp from '../layouts/layout-app';
import LayoutHome from '../layouts/layout-home';
import { Route, Switch } from 'react-router-dom';
import {
	selectIsMetaMaskConnected,
	setIsMetaMaskConnected,
} from '../../redux/slices/metamask-connected-slice';
import {
	selectIsMetaMaskInstalled,
	setIsMetaMaskInstalled,
} from '../../redux/slices/metamask-installed-slice';

const App = () => {
	const dispatch = useDispatch();
	const isMetaMaskInstalled = useSelector(selectIsMetaMaskInstalled);
	const isMetaMaskConnected = useSelector(selectIsMetaMaskConnected);
	console.log('App - isMetaMaskInstalled', isMetaMaskInstalled);
	console.log('App - isMetaMaskConnected', isMetaMaskConnected);

	useEffect(() => {
		if (!isMetaMaskInstalled) {
			dispatch(setIsMetaMaskInstalled());
		}
		if (isMetaMaskInstalled) {
			dispatch(setIsMetaMaskConnected());
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
					<LayoutHome>
						<Home />
					</LayoutHome>
				</Route>
			</Switch>
		</>
	);
};

export default App;
