import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { gethMovieCredits } from '../../Services/getApi';
import Loader from '../Loader/Loader';
import css from './Cast.module.css';
import PropTypes from 'prop-types';

function Cast() {
  const { movieId } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await gethMovieCredits(movieId);
        setData([...data]);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }
    fetchData();
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  if (data.length === 0) {
    return <div className={css.cast__noInfo}>Sorry but we don`t have cast</div>;
  }

  return (
    <ul className={css.cast__list}>
      {data.map(({ profile_path, name, character, id }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
            alt={name}
            className={css.cast__image}
          />
          <p className={css.cast__name}>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
}

export default Cast;

Cast.propTypes = {
  movieId: PropTypes.string,
};
