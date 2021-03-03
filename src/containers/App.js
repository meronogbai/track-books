import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import Home from '../components/Home';
import Header from '../components/Header';
import Login from './Login';
import Signup from './Signup';

const App = () => {
  const token = localStorage.getItem('token');
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {token ? <Redirect to="/home" /> : <Signup />}
          </Route>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
