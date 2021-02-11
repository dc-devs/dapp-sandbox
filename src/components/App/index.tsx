import Home from '../../pages/Home';
import Layout from '../Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => {
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
