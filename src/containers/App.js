import { BrowserRouter, Redirect, Route } from 'react-router-dom';
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
        <Route exact path="/">
          {token ? <Redirect to="/home" /> : <Signup />}
        </Route>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </BrowserRouter>
    </>
  );
};

export default App;
