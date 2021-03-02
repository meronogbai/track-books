import { useSelector } from 'react-redux';

const Header = () => {
  const title = useSelector(state => state.title);
  return (
    <header className="Header">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
