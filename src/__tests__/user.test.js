import userReducer, { authUser } from '../redux/user';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

test('returns initial state', () => {
  const actual = userReducer(undefined, {});
  expect(actual).toEqual(initialState);
});

test('authUser.pending', () => {
  const nextState = userReducer(initialState, authUser.pending());
  expect(nextState.data).toBe(initialState.data);
  expect(nextState.loading).toBe(true);
});

test('authUser.fulfilled', () => {
  const mockAsyncPayload = { username: 'test_user', jwt: 'blahblah.blahblah.;aj;dslfkja;dsfj' };
  const nextState = userReducer(initialState, authUser.fulfilled(mockAsyncPayload));
  expect(nextState.data).toBe(mockAsyncPayload);
  expect(nextState.loading).toBe(false);
});

test('authUser.rejected', () => {
  const mockAsyncPayloadError = 'error';
  const nextState = userReducer(initialState, authUser.rejected(mockAsyncPayloadError));
  expect(nextState.error).toBe(mockAsyncPayloadError);
  expect(nextState.loading).toBe(false);
});
