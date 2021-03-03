import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getBooks } from '../redux/books';
import Loading from './Loading';

const Home = () => {
  const history = useHistory();
  const token = localStorage.getItem('token');
  const books = useSelector(state => state.books);
  useEffect(() => {
    if (token) {
      getBooks(token);
    } else {
      history.push('/signup');
    }
  }, []);
  let content;
  if (books.loading) {
    content = <Loading />;
  } else {
    content = <h1>welcome home</h1>;
  }
  return (
    <>
      {content}
    </>
  );
};

export default Home;
