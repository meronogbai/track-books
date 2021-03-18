import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Loading from './Loading';
import { authUser } from '../redux/user';

const Form = ({ type, endpoint }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      history.push('/');
    }
  }, [token]);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authUser({ username, password, endpoint }));
  };
  if (user.loading) {
    return <Loading />;
  }
  return (
    <>
      {user.error && <div className="error">{user.error}</div>}
      <form onSubmit={handleSubmit} className="Form">
        <label htmlFor="username">
          Username
          <input
            type="text"
            name="username"
            id="username"
            required
            minLength="2"
            maxLength="20"
            value={username}
            onChange={e => { setUsername(e.target.value); }}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            required
            minLength="6"
            value={password}
            onChange={e => { setPassword(e.target.value); }}
          />
        </label>
        <button type="submit" className="Btn">{type}</button>
      </form>
      { type === 'Signup' ? (
        <p className="text-center">
          Do you already have an account?
          {' '}
          <Link to="/login">Login</Link>
        </p>
      ) : (
        <p className="text-center">
          Do you need to make an account?
          {' '}
          <Link to="/signup">Signup</Link>
        </p>
      )}
    </>
  );
};

export default Form;

Form.propTypes = {
  type: PropTypes.string.isRequired,
  endpoint: PropTypes.string.isRequired,
};
