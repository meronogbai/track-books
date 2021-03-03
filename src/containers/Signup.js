import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../components/Form';
import { changeTitle } from '../redux/title';
import { authUser } from '../redux/user';

const Signup = () => {
  const dispatch = useDispatch();
  const type = 'Signup';
  useEffect(() => {
    dispatch(changeTitle(type));
  }, []);
  return (<Form type="Signup" action={authUser} endpoint="users" />);
};

export default Signup;
