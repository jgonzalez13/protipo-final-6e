import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from 'views/Home/Home';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={HomeView} />
    </Switch>
  </Router>
);

export default Routes;
