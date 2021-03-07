import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const title = useSelector(state => state.title);
  const history = useHistory();
  const token = localStorage.getItem('token');
  const handleClick = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };
  return (
    <header className="Header">
      <h1>{title}</h1>
      { token && (
      <button
        type="button"
        aria-label="Logout"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faPowerOff} />
      </button>
      ) }
    </header>
  );
};

export default Header;
