import { Link, useLocation, Outlet } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import css from './Details.module.css';
import PropTypes from 'prop-types';

export function Details({ data }) {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    data;
  const rating = Math.round(vote_average * 10) + '%';
  const genresList = genres.map(genre => genre.name).join(' ');
  const year = release_date.split('-')[0];
  const location = useLocation();
  const from = location.state.from;

  return (
    <>
      <section>
        <Link to={location?.state?.from ?? '/'} className={css.details__link}>
          <BsArrowLeft />
          Go back
        </Link>
        <div className={css.details__wrapper}>
          <img
            className={css.details__image}
            src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
            alt={title}
          />
          <div>
            <h2 className={css.details__title}>{`${title} (${year})`}</h2>
            <p className={css.details__text}>User score: {rating}</p>
            <h3 className={css.details__subtitle}>Overview</h3>
            <p className={css.details__text}>{overview}</p>
            <h3 className={css.details__subtitle}>Genres</h3>
            <p className={css.details__text}>{genresList}</p>
          </div>
        </div>
      </section>
      <section className={css.details__add}>
        <p className={css.details__text}>Additional information</p>
        <ul className={css.details__list}>
          <li className={css.details__item}>
            <Link to="cast" state={{ from }}>
              Cast
            </Link>
          </li>
          <li className={css.details__item}>
            <Link to="reviews" state={{ from }}>
              Reviews
            </Link>
          </li>
        </ul>
      </section>
      <Outlet />
    </>
  );
}

Details.propTypes = {
  data: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
        })
      ),
      PropTypes.string,
    ]),
  }).isRequired,
};
