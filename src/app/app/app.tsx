import { useEffect } from 'react';
import AppHome from '../screens/app-home';
import { useSelector, useDispatch } from 'react-redux';
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

	dispatch(fetchIsMetaMaskConnected());
	dispatch(fetchIsMetaMaskInstalled());
	console.log('App - metaMaskWallet', metaMaskWallet);
	console.log('App - isMetaMaskInstalled', isMetaMaskInstalled);
	console.log('App - isMetaMaskConnected', isMetaMaskConnected);

	useEffect(() => {
		if (isMetaMaskConnected) {
			dispatch(fetchMetaMaskWallet());
		}
	}, [isMetaMaskConnected, dispatch]);

	return (
		<>
			<Switch>
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
