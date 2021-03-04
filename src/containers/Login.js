import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
    <>
      <Form type={type} action={authUser} endpoint="sessions" />
      <p className="text-center">
        Do you need to make an account?
        {' '}
        <Link to="/signup">Signup</Link>
      </p>
    </>
  );
};

export default Login;
