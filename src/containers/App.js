import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/Home';
import Header from '../components/Header';
import Login from './Login';
import Signup from './Signup';

const App = () => (
  <>
    <Header />
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </BrowserRouter>
  </>
);

export default App;
