import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getBooks } from '../redux/books';
import Loading from './Loading';
import { changeTitle } from '../redux/title';
import Nav from './Nav';

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const books = useSelector(state => state.books);
  useEffect(() => {
    dispatch(changeTitle('Add Book'));
    if (token) {
      dispatch(getBooks(token));
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
      <Nav />
    </>
  );
};

export default Home;