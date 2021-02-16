import Home from '../../pages/home';
import Layout from '../layout';
import useUpdateIsMetaMaskInstalled from '../../hooks/useUpdateIsMetaMaskInstalled';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	useUpdateIsMetaMaskInstalled();

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
