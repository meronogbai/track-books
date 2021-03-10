import { create } from 'react-test-renderer';
import * as reactRedux from 'react-redux';
import AddBook from '../components/AddBook';

jest.spyOn(reactRedux, 'useSelector');
jest.spyOn(reactRedux, 'useDispatch');

test('renders correctly', () => {
  const tree = create(<AddBook />).toJSON();
  expect(tree).toMatchSnapshot();
});
