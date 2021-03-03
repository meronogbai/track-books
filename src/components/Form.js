import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Form = ({ type, action, endpoint }) => {
  const dispatch = useDispatch();
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
  return (
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
};

export default Form;

Form.propTypes = {
  type: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  endpoint: PropTypes.string.isRequired,
};
