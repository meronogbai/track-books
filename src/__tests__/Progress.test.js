import { create } from 'react-test-renderer';
import * as reactRedux from 'react-redux';
import Progress from '../components/Progress';

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
jest.spyOn(reactRedux, 'useDispatch');

test('renders correctly', () => {
  useSelectorMock.mockReturnValue({ loading: true });
  const tree = create(<Progress />).toJSON();
  expect(tree).toMatchSnapshot();
});
