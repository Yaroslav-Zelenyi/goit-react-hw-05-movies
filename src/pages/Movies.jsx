import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/Movies/Movies';
import { getQueryMovies } from '../Services/getApi';

function Movies() {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();

  const location = useLocation();
  const queryString = searchParams.get('query');

  useEffect(() => {
    async function getData() {
      try {
        let data;
        if (!searchValue && queryString) {
          data = await getQueryMovies(queryString);
        } else {
          data = await getQueryMovies(searchValue);
        }
        setMovies([...data]);
      } catch (error) {
        console.log('Error data:', error);
      }
    }
    getData();
  }, [queryString, searchValue]);

  function handleSearch(data) {
    setSearchValue(data);
  }

  return (
    <>
      <SearchBar query={handleSearch} />
      <MoviesList data={movies} location={location} />
    </>
  );
}

export default Movies;
