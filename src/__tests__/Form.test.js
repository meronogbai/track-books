import { create } from 'react-test-renderer';
import * as reactRedux from 'react-redux';
import Form from '../components/Form';

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
jest.spyOn(reactRedux, 'useDispatch');

test('renders correctly', () => {
  useSelectorMock.mockReturnValue({ loading: true });
  const tree = create(<Form type="Login" endpoint="sessions" />).toJSON();
  expect(tree).toMatchSnapshot();
});
