import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../redux/user';

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const title = useSelector(state => state.title);
  const token = localStorage.getItem('token');
  const handleClick = () => {
    localStorage.removeItem('token');
    dispatch(logout());
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
