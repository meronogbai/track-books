import PropTypes from 'prop-types';

const Form = ({ type, handleSubmit }) => (
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
      />
    </label>
    <button type="submit" className="Btn">{type}</button>
  </form>
);

export default Form;

Form.propTypes = {
  type: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
