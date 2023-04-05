import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import css from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <header className={css.layout__header}>
        <nav>
          <ul className={css.layout__list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${css.layout__active}` : `${css.layout__link}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive ? `${css.layout__active}` : `${css.layout__link}`
                }
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
