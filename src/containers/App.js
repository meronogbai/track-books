import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import AddBook from '../components/AddBook';
import Header from '../components/Header';
import Track from '../components/Track';
import Progress from '../components/Progress';
import Login from './Login';
import Signup from './Signup';

const App = () => {
  const token = localStorage.getItem('token');
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            {token ? <Redirect to="/track" /> : <Signup />}
          </Route>
          <Route exact path="/add-book" component={AddBook} />
          <Route exact path="/track" component={Track} />
          <Route exact path="/progress" component={Progress} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
