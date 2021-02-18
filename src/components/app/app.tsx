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
	const isWalletConnected = useSelector(selectIsMetaMaskConnected);

	useUpdateIsMetaMaskInstalled();
	useUpdateIsMetaMaskConnected();

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
						<Home isWalletConnected={isWalletConnected} />
					</LayoutHome>
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
