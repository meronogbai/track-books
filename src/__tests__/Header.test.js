import { create } from 'react-test-renderer';
import * as reactRedux from 'react-redux';
import Header from '../components/Header';

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

useSelectorMock.mockReturnValue('Header');

test('renders correctly', () => {
  const tree = create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
