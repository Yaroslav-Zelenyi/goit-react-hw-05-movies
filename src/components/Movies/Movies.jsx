import { Link } from 'react-router-dom';
import css from './Movies.module.css';
import PropTypes from 'prop-types';

export function MoviesList({ data, title, location }) {
  return (
    <section>
      <h2 className={css.movies__title}>{title}</h2>
      <ul className={css.movies__list}>
        {data.map(movie => (
          <li key={movie.id} className={css.movies__item}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.name ?? movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

MoviesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string,
  location: PropTypes.object,
};
