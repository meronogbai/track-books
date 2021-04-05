import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Loading from './Loading';
import { changeTitle } from '../redux/title';
import { getBooks, addChapter } from '../redux/books';
import API_URL from '../constants/url';

const Track = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
  const token = localStorage.getItem('token');
  useEffect(() => {
    dispatch(changeTitle('Track'));
    dispatch(getBooks(token));
  }, []);
  const handleAddClick = book => {
    if (book.completed_chapters < book.total_chapters) {
      dispatch(addChapter({ token, book }));
    }
  };
  const handleDeleteClick = book => {
    fetch(
      `${API_URL}/books/${book.id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    ).then(() => dispatch(getBooks(token)));
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
            <FontAwesomeIcon icon={faPlus} onClick={() => handleAddClick(book)} className="addChapter" />
            <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteClick(book)} className="deleteChapter" />
          </div>

        </div>
      ))}
    </div>
  );
};

export default Track;
