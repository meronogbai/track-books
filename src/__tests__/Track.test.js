import { create } from 'react-test-renderer';
import * as reactRedux from 'react-redux';
import Track from '../components/Track';

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
jest.spyOn(reactRedux, 'useDispatch');

test('renders correctly', () => {
  useSelectorMock.mockReturnValue({ loading: true });
  const tree = create(<Track />).toJSON();
  expect(tree).toMatchSnapshot();
});
