import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/Home';

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
  </BrowserRouter>
);

export default App;
