import { useEffect } from 'react';
import AppHome from '../screens/app-home';
import { useSelector, useDispatch } from 'react-redux';
import LayoutAppHome from '../layouts/layout-app-home';
import { Route, Switch } from 'react-router-dom';
import { fetchMetaMaskWallet } from '../../redux/slices/metamask-slice';
import {
	selectIsMetaMaskConnected,
	fetchIsMetaMaskConnected,
} from '../../redux/slices/metamask-connected-slice';
import { fetchIsMetaMaskInstalled } from '../../redux/slices/metamask-installed-slice';

const App = () => {
	const dispatch = useDispatch();
	const isMetaMaskConnected = useSelector(selectIsMetaMaskConnected);

	dispatch(fetchIsMetaMaskInstalled());
	dispatch(fetchIsMetaMaskConnected());

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
