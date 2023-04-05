import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from '../../Services/getApi';
import Loader from '../Loader/Loader';

export default function Reviews() {
  const [review, setReview] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await getMoviesReviews(movieId);
        setReview(data);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }
    fetchReviews();
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ul>
      {review.map(({ author, content, id }) => (
        <li key={id}>
          <h2>{author}</h2>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
}
