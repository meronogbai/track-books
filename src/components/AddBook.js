import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changeTitle } from '../redux/title';
import Loading from './Loading';
import Nav from './Nav';
import API_URL from '../constants/url';

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [totalChapters, setTotalChapters] = useState('');
  const [completedChapters, setCompletedChapters] = useState('');
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');
  useEffect(() => {
    dispatch(changeTitle('Add Book'));
    if (!token) {
      history.push('/signup');
    }
  }, []);
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(`${API_URL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        total_chapters: totalChapters,
        completed_chapters: completedChapters,
      }),
    });
    if (!response.ok) throw new Error(response.statusText);
    setLoading(false);
    setTitle('');
    setTotalChapters('');
    setCompletedChapters('');
  };
  let content;
  if (loading) {
    content = <Loading />;
  } else {
    content = (
      <form className="Form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          required
          minLength="2"
          maxLength="50"
          value={title}
          onChange={e => { setTitle(e.target.value); }}
          placeholder="Title"
          aria-label="Title"
        />
        <input
          type="number"
          name="total_chapters"
          id="total_chapters"
          required
          min="1"
          max="999"
          value={totalChapters}
          onChange={e => { setTotalChapters(e.target.value); }}
          placeholder="Total Chapters"
          aria-label="Total Chapters"
        />
        <input
          type="number"
          name="completed_chapters"
          id="completed_chapters"
          required
          min="0"
          max={totalChapters}
          value={completedChapters}
          onChange={e => { setCompletedChapters(e.target.value); }}
          placeholder="Completed Chapters"
          aria-label="Completed Chapters"
        />
        <button type="submit" className="Btn">Add Book</button>
      </form>
    );
  }
  return (
    <>
      { content }
      <Nav />
    </>
  );
};

export default Home;
