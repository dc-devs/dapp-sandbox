import Home from './Home';
import Layout from './Layout';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route path="/sign-up">
						<SignUp />
					</Route>
					<Route path="/sign-in">
						<SignIn />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Layout>
		</Router>
	);
};

export default App;
