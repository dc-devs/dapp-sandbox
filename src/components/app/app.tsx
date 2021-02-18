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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const isWalletConnected = useSelector(selectIsMetaMaskConnected);

	useUpdateIsMetaMaskInstalled();
	useUpdateIsMetaMaskConnected();

	console.log(isWalletConnected);

	const redirectComponent = !isWalletConnected ? (
		<Redirect to="/" />
	) : (
		<Redirect to="/dashboard" />
	);

	return (
		<Router>
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
		</Router>
	);
};

export default App;
