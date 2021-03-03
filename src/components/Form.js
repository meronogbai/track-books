import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';

const Form = ({ type, action, endpoint }) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.loading);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(action({ username, password, endpoint }));
  };
  let content;
  if (loading) {
    content = <Loading />;
  } else {
    content = (
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
            onChange={handleUsernameChange}
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
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit" className="Btn">{type}</button>
      </form>
    );
  }
  return (
    <>
      { content }
    </>
  );
};

export default Form;

Form.propTypes = {
  type: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  endpoint: PropTypes.string.isRequired,
};
