import Home from '../pages/home';
import Layout from './layout';
import {
	useUpdateIsMetaMaskInstalled,
	useUpdateIsMetaMaskConnected,
} from '../../hooks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	useUpdateIsMetaMaskInstalled();
	useUpdateIsMetaMaskConnected();

	return (
		<Router>
			<Layout>
				<Switch>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Layout>
		</Router>
	);
};

export default App;
