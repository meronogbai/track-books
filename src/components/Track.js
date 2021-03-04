import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Loading from './Loading';
import { changeTitle } from '../redux/title';
import { getBooks, addChapter } from '../redux/books';
import Nav from './Nav';

const Track = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
  const token = localStorage.getItem('token');
  useEffect(() => {
    dispatch(changeTitle('Track'));
    if (token) {
      dispatch(getBooks(token));
    } else {
      history.push('/login');
    }
  }, []);
  const handleClick = book => {
    if (book.completed_chapters < book.total_chapters) {
      dispatch(addChapter({ token, book }));
    }
  };
  let content = null;
  if (books.loading) {
    content = <Loading />;
  } else if (books.data) {
    content = (
      <div className="Books">
        {books.data.map(book => (
          <div className="Book" key={book.id}>
            <h3 className="title">
              {book.title}
            </h3>
            <div className="chapters">
              {`${book.completed_chapters}/${book.total_chapters}`}
              <FontAwesomeIcon icon={faPlus} onClick={() => handleClick(book)} className="addChapter" />
            </div>

          </div>
        ))}
      </div>
    );
  }
  return (
    <>
      {content}
      <Nav />
    </>
  );
};

export default Track;
