import { useEffect } from 'react';
import AppHome from '../screens/app-home';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LayoutAppHome from '../layouts/layout-app-home';
import {
	fetchMetaMaskWallet,
	selectMetaMaskWalletStatus,
	selectMetaMaskWallet,
} from '../../redux/slices/metamask-slice';

const App = () => {
	const dispatch = useDispatch();
	const metaMaskWallet = useSelector(selectMetaMaskWallet);
	const metaMaskWalletStatus = useSelector(selectMetaMaskWalletStatus);
	console.log('METAMASK', metaMaskWallet);

	useEffect(() => {
		if (metaMaskWalletStatus === 'idle') {
			dispatch(fetchMetaMaskWallet());
		}
	}, [metaMaskWalletStatus, dispatch]);

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
