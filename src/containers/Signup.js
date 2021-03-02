import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../components/Form';
import { changeTitle } from '../redux/title';

const Signup = () => {
  const dispatch = useDispatch();
  const type = 'Signup';
  useEffect(() => {
    dispatch(changeTitle(type));
  }, []);
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (<Form type="Signup" handleSubmit={handleSubmit} />);
};

export default Signup;
