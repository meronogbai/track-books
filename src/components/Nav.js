import {
  faChartPie, faEllipsisH, faPlus, faPoll,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { Link } = require('react-router-dom');

const Nav = () => (
  <nav className="Nav">
    <Link to="/add-book">
      <FontAwesomeIcon icon={faPlus} size="lg" />
      <span>Add Book</span>
    </Link>
    <Link to="/track">
      <FontAwesomeIcon icon={faPoll} size="lg" />
      <span>Track</span>
    </Link>
    <Link to="/home">
      <FontAwesomeIcon icon={faChartPie} size="lg" />
      <span>Progress</span>
    </Link>
    <Link to="/home">
      <FontAwesomeIcon icon={faEllipsisH} size="lg" />
      <span>More</span>
    </Link>
  </nav>
);

export default Nav;
