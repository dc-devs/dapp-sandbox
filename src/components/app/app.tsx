import LayoutHome from './layout-home';
import LayoutApp from './layout-app';
import Home from '../pages/home';
import Dashboard from '../pages/dashboard';
import { useSelector } from 'react-redux';
import { selectIsMetaMaskConnected } from '../../redux/slices/metamask-slice';
import {
	useUpdateIsMetaMaskInstalled,
	useUpdateIsMetaMaskConnected,
} from '../../hooks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	useUpdateIsMetaMaskInstalled();
	useUpdateIsMetaMaskConnected();

	const isWalletConnected = useSelector(selectIsMetaMaskConnected);

	console.log('isWalletConnected', isWalletConnected);

	return (
		<Router>
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
		</Router>
	);
};

export default App;
