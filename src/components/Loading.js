import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loading = () => (<div className="Loading"><FontAwesomeIcon icon={faSpinner} spin size="10x" /></div>);

export default Loading;
