import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { getBooks } from '../redux/books';
import { changeTitle } from '../redux/title';
import Loading from './Loading';
import 'react-circular-progressbar/dist/styles.css';

const Progress = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
  const token = localStorage.getItem('token');
  useEffect(() => {
    dispatch(changeTitle('Progress'));
    dispatch(getBooks(token));
  }, []);
  let content;
  if (books.loading) {
    content = <Loading />;
  } else if (books.data) {
    content = (
      <div className="ProgressBooks">
        {books.data.map(book => (
          <div className="ProgressBook" key={book.id}>
            <CircularProgressbar
              value={book.completed_chapters}
              maxValue={book.total_chapters}
              text={book.title}
              styles={{
                text: {
                  fill: '#42b5e8',
                  fontSize: '1rem',
                },
                path: {
                  stroke: '#42b5e8',
                },
              }}
            />
          </div>
        ))}
      </div>
    );
  }
  return (
    <>
      {content}
    </>
  );
};

export default Progress;
