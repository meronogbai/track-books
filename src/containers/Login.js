import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../components/Form';
import { changeTitle } from '../redux/title';
import { authUser } from '../redux/user';

const Login = () => {
  const dispatch = useDispatch();
  const type = 'Login';
  useEffect(() => {
    dispatch(changeTitle(type));
  }, []);
  return (
    <Form type={type} action={authUser} endpoint="sessions" />
  );
};

export default Login;
