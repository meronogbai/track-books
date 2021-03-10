import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../components/Form';
import { changeTitle } from '../redux/title';

const Login = () => {
  const dispatch = useDispatch();
  const type = 'Login';
  useEffect(() => {
    dispatch(changeTitle(type));
  }, []);
  return (
    <Form type={type} endpoint="sessions" />
  );
};

export default Login;
