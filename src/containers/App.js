import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/Home';
import Header from '../components/Header';
import Login from '../components/Login';

const App = () => (
  <>
    <Header />
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </BrowserRouter>
  </>
);

export default App;
