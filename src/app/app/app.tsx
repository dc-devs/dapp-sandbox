import AppHome from '../screens/app-home';
import { Route, Switch } from 'react-router-dom';
import LayoutAppHome from '../layouts/layout-app-home';

const App = () => {
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
