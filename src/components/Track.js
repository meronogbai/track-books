import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Loading from './Loading';
import { changeTitle } from '../redux/title';
import { getBooks, addChapter } from '../redux/books';

const Track = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
  const token = localStorage.getItem('token');
  useEffect(() => {
    dispatch(changeTitle('Track'));
    dispatch(getBooks(token));
  }, []);
  const handleClick = book => {
    if (book.completed_chapters < book.total_chapters) {
      dispatch(addChapter({ token, book }));
    }
  };
  if (books.loading) {
    return <Loading />;
  }
  return (
    <div className="Books">
      {books.data.map(book => (
        <div className="Book" key={book.id}>
          <h3 className="title">
            {book.title}
          </h3>
          <div className="chapters">
            {`${book.completed_chapters}/${book.total_chapters}`}
            <FontAwesomeIcon icon={faPlus} onClick={() => handleClick(book)} className="addChapter" />
            <FontAwesomeIcon icon={faTrash} className="deleteChapter" />
          </div>

        </div>
      ))}
    </div>
  );
};

export default Track;
