import { useSelector } from 'react-redux';

const Header = () => {
  const title = useSelector(state => state.title);
  return (
    <header>
      {title}
    </header>
  );
};

export default Header;
