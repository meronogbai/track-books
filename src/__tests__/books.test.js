import booksReducer, { getBooks, addChapter } from '../redux/books';

const initialState = {
  loading: false,
  error: null,
  data: [],
};

test('returns initial state', () => {
  const actual = booksReducer(undefined, {});
  expect(actual).toEqual(initialState);
});

test('getBooks.pending', () => {
  const nextState = booksReducer(initialState, getBooks.pending());
  expect(nextState.data).toBe(initialState.data);
  expect(nextState.loading).toBe(true);
});

test('getBooks.fulfilled', () => {
  const mockAsyncPayload = { books: { title: 'hello' } };
  const nextState = booksReducer(initialState, getBooks.fulfilled(mockAsyncPayload));
  expect(nextState.data).toBe(mockAsyncPayload);
  expect(nextState.loading).toBe(false);
});

test('getBooks.rejected', () => {
  const mockAsyncPayloadError = 'error';
  const nextState = booksReducer(initialState, getBooks.rejected(mockAsyncPayloadError));
  expect(nextState.error).toBe(mockAsyncPayloadError);
  expect(nextState.loading).toBe(false);
});

test('addChapter.pending', () => {
  const nextState = booksReducer(initialState, addChapter.pending());
  expect(nextState.data).toBe(initialState.data);
  expect(nextState.loading).toBe(true);
});

test('addChapter.fulfilled', () => {
  const mockAsyncPayload = { book: { title: 'hello' } };
  const nextState = booksReducer(initialState, getBooks.fulfilled(mockAsyncPayload.book));
  expect(nextState.data).toBe(mockAsyncPayload.book);
  expect(nextState.loading).toBe(false);
});

test('addChapter.rejected', () => {
  const mockAsyncPayloadError = 'error';
  const nextState = booksReducer(initialState, addChapter.rejected(mockAsyncPayloadError));
  expect(nextState.error).toBe(mockAsyncPayloadError);
  expect(nextState.loading).toBe(false);
});
