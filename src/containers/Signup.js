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
  return (
    <Form type={type} endpoint="users" />
  );
};

export default Signup;
