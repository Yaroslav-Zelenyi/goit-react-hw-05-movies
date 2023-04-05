import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';
import Home from '../pages/Home';

const Movies = lazy(() => import('../pages/Movies'));
const MovieDetail = lazy(() => import('../pages/MovieDetail'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetail />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
