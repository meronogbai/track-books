import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import AddBook from '../components/AddBook';
import Header from '../components/Header';
import Track from '../components/Track';
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
            {token ? <Redirect to="/track" /> : <Signup />}
          </Route>
          <Route exact path="/add-book" component={AddBook} />
          <Route exact path="/track" component={Track} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
