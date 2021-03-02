import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../components/Form';
import { changeTitle } from '../redux/title';

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitle('Login'));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Form type="Login" handleSubmit={handleSubmit} />
  );
};

export default Login;
