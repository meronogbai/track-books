import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import { changeTitle } from '../redux/title';
import { authUser } from '../redux/user';

const Signup = () => {
  const dispatch = useDispatch();
  const type = 'Signup';
  useEffect(() => {
    dispatch(changeTitle(type));
  }, []);
  return (
    <>
      <Form type={type} action={authUser} endpoint="users" />
      <p className="text-center">
        Do you already have an account?
        {' '}
        <Link to="/login">Login</Link>
      </p>
    </>
  );
};

export default Signup;
