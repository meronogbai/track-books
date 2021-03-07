import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Nav from '../components/Nav';

const ProtectedRoute = ({ component: Component }) => {
  const token = localStorage.getItem('token');

  return token ? (
    <>
      <Component />
      <Nav />
    </>
  )
    : <Redirect to={{ pathname: '/login' }} />;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
};
