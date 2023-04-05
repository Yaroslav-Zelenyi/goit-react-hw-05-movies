import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../Services/getApi';
import { MoviesList } from '../components/Movies/Movies';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getTrendingMovies();
        setMovies([...data]);
      } catch (error) {
        console.log('Error data:', error);
      }
    }
    getData();
  }, []);

  return (
    <>
      <MoviesList data={movies} title={'Trending today'} />
    </>
  );
}

export default Home;