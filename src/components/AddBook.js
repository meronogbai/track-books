import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changeTitle } from '../redux/title';
import Nav from './Nav';

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  useEffect(() => {
    dispatch(changeTitle('Add Book'));
    if (!token) {
      history.push('/signup');
    }
  }, []);
  return (
    <>
      <h1>Hello world</h1>
      <Nav />
    </>
  );
};

export default Home;
