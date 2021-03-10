import titleReducer, { changeTitle } from '../redux/title';

const initialState = '';

test('returns initial state', () => {
  const actual = titleReducer(undefined, {});
  expect(actual).toEqual(initialState);
});

test('changeTitle', () => {
  const nextState = titleReducer(initialState, changeTitle('test'));
  expect(nextState).toBe('test');
});
